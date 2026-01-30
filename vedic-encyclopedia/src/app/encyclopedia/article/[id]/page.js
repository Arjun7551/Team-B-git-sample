import { getPublishedArticleById } from '@/actions/article.public.actions';

export default async function ArticleContentPage({ params }) {
  const { id } = await params;

  if (!id) {
    return (
      <div className="p-10 text-center text-red-600">
        Article not selected
      </div>
    );
  }

  const article = await getPublishedArticleById(id);

  if (!article) {
    return (
      <div className="p-10 text-center text-gray-600">
        Article not found
      </div>
    );
  }

  return (
    <div className="bg-[#fff7ed] min-h-screen">

      {/* Header */}
      <header className="text-center py-8 bg-[#ffedd5] text-[#4b2e19] border-b border-orange-300">
        <h1 className="text-4xl font-bold font-serif">
          {article.title}
        </h1>
        <p className="mt-2 text-sm text-orange-800">
          Vedic Encyclopedia
        </p>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-8 py-12">
        <article className="bg-white rounded-3xl shadow-md px-10 py-10">

          <p
            className="text-lg leading-relaxed text-orange-900 whitespace-pre-line text-justify"
          >
            {article.content}
          </p>

        </article>
      </main>
    </div>
  );
}
