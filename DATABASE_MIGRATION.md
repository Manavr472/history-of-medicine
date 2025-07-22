# Database Migration Guide

## PostgreSQL + Prisma Setup

This project has been migrated from Firebase Firestore to PostgreSQL using Prisma ORM.

### Prerequisites

1. PostgreSQL server running locally (or remote)
2. Database named `homedb` created
3. `DATABASE_URL` environment variable set in `.env.local`

### Setup Commands

```bash
# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed database with sample data
npm run db:seed

# Open Prisma Studio (GUI for database)
npm run db:studio
```

### Database Schema

#### Subsections
- `id`: Unique identifier (cuid)
- `slug`: URL-friendly identifier (e.g., "preclinical", "clinical")
- `name`: Display name (e.g., "Pre-Clinical", "Clinical")

#### Blog Posts
- `id`: Unique identifier (cuid)
- `title`: Blog post title
- `content`: HTML content
- `summary`: Optional summary text
- `slug`: Optional SEO-friendly slug
- `published`: Boolean (default: true)
- `subsectionId`: Foreign key to Subsection

### Migration from Firebase

If you have existing Firebase data, use the migration script:

1. Update Firebase config in `scripts/migrate-from-firebase.ts`
2. Uncomment the migration function call
3. Run: `npx tsx scripts/migrate-from-firebase.ts`

### API Usage Examples

```typescript
// Get all blog posts in a subsection
const subsectionData = await prisma.subsection.findUnique({
  where: { slug: 'preclinical' },
  include: {
    blogPosts: {
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    },
  },
});

// Get a specific blog post
const blog = await prisma.blogPost.findFirst({
  where: {
    id: postId,
    subsection: { slug: subsectionSlug },
    published: true,
  },
  include: { subsection: true },
});
```

### Routes Updated

- `/history/[subsection]` - Lists all blog posts in a subsection
- `/history/[subsection]/[postid]` - Shows individual blog post

Both routes now use Prisma instead of Firebase for data fetching.
