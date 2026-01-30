import Link from "next/link";
import { getPublishedArticlesByCategory } from "@/actions/article.public.actions";

export default async function EncyclopediaCategoryPage({ params }) {
  // Next.js 15+ params handling
  const { id } = await params;

  if (!id) {
    return (
      <div className="p-10 text-center text-red-600">
        Category not selected
      </div>
    );
  }

  const articles = await getPublishedArticlesByCategory(id);

  if (!articles || articles.length === 0) {
    return (
      <div className="p-10 text-center text-gray-600">
        No articles found in this category.
      </div>
    );
  }

  return (
    <div className="bg-[#fff7ed] min-h-screen">

      {/* Header */}
      <header className="text-center py-8 bg-[#ffedd5] text-[#4b2e19]">
        <h1 className="text-4xl font-bold">📜 Vedic Encyclopedia</h1>
        <p className="mt-2 text-lg">Articles in selected category</p>
      </header>

      {/* Article list */}
      <section className="flex flex-col items-center gap-5 p-8">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/encyclopedia/article/${article.id}`}
            className="w-full max-w-5xl bg-white px-10 py-7 rounded-xl shadow-md
                       cursor-pointer hover:-translate-y-1 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-[#4b2e19]">
              {article.title}
            </h2>

            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {article.content}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
