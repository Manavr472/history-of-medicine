import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

export default async function HistoryLandingPage() {
  const historyRef = collection(db, "history");
  const snapshot = await getDocs(historyRef);

  const subsections = snapshot.docs.map((doc) => ({
    id: doc.id,
  }));

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">History of Medicine</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {subsections.map((section) => (
          <Link
            key={section.id}
            href={`/history/${section.id}`}
            className="block p-4 bg-blue-100 hover:bg-blue-200 rounded-lg text-center text-blue-800 font-semibold shadow"
          >
            {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
          </Link>
        ))}
      </div>
    </main>
  );
}
