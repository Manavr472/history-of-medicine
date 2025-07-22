// src/app/[slug]/page.tsx
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Adjust the path to your Firebase config
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const docRef = doc(db, "pages", slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound(); // shows the 404 page
  }

  const data = docSnap.data();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
      <p className="text-lg">{data?.content}</p>
    </main>
  );
}
