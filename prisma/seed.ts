// Import and execute the main seed function from seed-all-sections.ts
import { main } from './seed-all-sections';

// Run the main seeding function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
