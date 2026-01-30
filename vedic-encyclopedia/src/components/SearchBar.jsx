'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { globalSearch } from '@/actions/search.actions';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ categories: [], articles: [] });
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim().length < 2) {
        setResults({ categories: [], articles: [] });
        setOpen(false);
        return;
      }

      const data = await globalSearch(query);
      setResults(data);
      setOpen(true);
    };

    fetchResults();
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search articles or categories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border px-4 py-2 rounded-md"
      />

      {open && (
        <div className="absolute z-50 w-full bg-white border rounded-md mt-1 shadow">

          {/* Categories */}
          {results.categories.length > 0 && (
            <div className="p-2 border-b">
              <p className="text-xs font-semibold text-gray-500 mb-1">
                Categories
              </p>

              {results.categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    setOpen(false);
                    setQuery('');
                    router.push(`/category/${cat.id}`);
                  }}
                  className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded"
                >
                  {cat.name}
                </div>
              ))}
            </div>
          )}

          {/* Articles */}
          {results.articles.length > 0 && (
            <div className="p-2">
              <p className="text-xs font-semibold text-gray-500 mb-1">
                Articles
              </p>

              {results.articles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => {
                    setOpen(false);
                    setQuery('');
                    router.push(`/article/${art.id}`);
                  }}
                  className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded"
                >
                  {art.title}
                </div>
              ))}
            </div>
          )}

          {/* No result */}
          {results.categories.length === 0 &&
            results.articles.length === 0 && (
              <div className="p-3 text-sm text-gray-500">
                No results found
              </div>
            )}
        </div>
      )}
    </div>
  );
}
