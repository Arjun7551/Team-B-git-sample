export default function AboutSection() {
  return (
    
    <section
  id="about"
  className="bg-[#fff7ed] py-16 px-4 scroll-mt-32"
>

      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-[#7c2d12]">
            ABOUT ISKCON
          </h2>
          <p className="text-sm mt-2 text-[#9a3412]">
            The International Society for Krishna Consciousness
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-[#fed7aa]">
          
          {/* Our Mission */}
          <h3 className="text-xl font-serif text-[#7c2d12] mb-2">
            Our Mission
          </h3>
          <p className="text-[#5a2a0c] text-sm leading-relaxed mb-6">
            The International Society for Krishna Consciousness (ISKCON) was
            founded in 1966 by His Divine Grace A.C. Bhaktivedanta Swami
            Prabhupada in New York City. The Society was formed to spread the
            practice of bhakti yoga, in which aspirants dedicate their thoughts
            and actions towards pleasing the Supreme Personality of Godhead,
            Krishna.
          </p>

          {/* Seven Purposes */}
          <h3 className="text-xl font-serif text-[#7c2d12] mb-3">
            Seven Purposes of ISKCON
          </h3>

          <ol className="list-decimal pl-5 space-y-2 text-sm text-[#5a2a0c] mb-6">
            <li>To systematically propagate spiritual knowledge to society.</li>
            <li>To propagate a consciousness of Krishna as revealed in scriptures.</li>
            <li>To bring members together closer to Krishna and humanity.</li>
            <li>To teach and encourage the sankirtana movement.</li>
            <li>To erect holy places dedicated to Lord Krishna.</li>
            <li>To bring members closer for a simpler way of life.</li>
            <li>To publish and distribute books and magazines.</li>
          </ol>

          {/* Founder */}
          <h3 className="text-xl font-serif text-[#7c2d12] mb-2">
            Founder-Acharya
          </h3>
          <p className="text-sm text-[#5a2a0c] leading-relaxed mb-6">
            His Divine Grace A.C. Bhaktivedanta Swami Prabhupada (1896–1977)
            is widely regarded as the foremost Vedic scholar, translator,
            and teacher of modern India. He dedicated his life to spreading
            devotion to Krishna worldwide.
          </p>

          {/* Global Presence */}
          <h3 className="text-xl font-serif text-[#7c2d12] mb-2">
            Global Presence
          </h3>
          <p className="text-sm text-[#5a2a0c] leading-relaxed mb-6">
            ISKCON has grown into a worldwide confederation of more than 600
            centers, including farm communities, schools, and restaurants,
            serving millions through spiritual education and food relief.
          </p>

          {/* Quote Box */}
          <div className="bg-[#fff1dc] border-l-4 border-[#ea580c] p-4 rounded">
            <p className="text-sm italic text-[#7c2d12]">
              “The International Society for Krishna Consciousness is a movement
              aimed at the spiritual reorientation of mankind through the
              simple process of chanting the holy names of God.”
            </p>
            <p className="text-xs mt-2 text-[#9a3412]">
              — Srila Prabhupada
            </p>
          </div>

        </div>
      </div>
    </section>
    
  );
}
