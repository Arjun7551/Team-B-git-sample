export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full px-12 -mt-4 mb-20 flex flex-col items-center text-center"
    >
      <div className="w-full px-9">
        <div
          className="rounded-[1.5rem] p-14 pt-10 pb-10 shadow-lg bg-cover bg-center h-85"
          style={{ backgroundImage: "url('/categories/temple.jpeg')" }}
        >
          {/* TITLE */}
          <div className="flex flex-col items-center justify-center mt-6 mb-6">
            <h2 className="text-4xl md:text-5xl font-serif text-center text-orange-950">
              Discover Timeless Vedic Knowledge
            </h2>
          </div>

          {/* SEARCH */}
          <div className="mx-auto max-w-xl flex bg-white rounded-2xl border border-orange-700 overflow-hidden mt-2">
            <input
              type="text"
              placeholder="Search scriptures, deities, concepts..."
              className="flex-1 px-5 py-4 outline-none text-orange-800"
            />
            <button className="px-8 bg-orange-800 text-white font-semibold hover:bg-orange-700 border-orange-950">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
