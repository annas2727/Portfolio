import ExperienceCard from "@/components/experienceCard";

export default function Home() {
  return (
    <>
    <section className="relative w-full h-[300px] bg-white p-8 overflow-hidden">
        <img
          src="/waves.svg"
          className="absolute top-0 left-0 w-1/2 opacity-90"
        />
        
      <div className="relative z-19 mt-10 flex items-center gap-6">
          <img 
          src="/pfp.jpg" 
          alt="profile picture"
          className="w-40 h-40 rounded-full p-[3px] bg-gradient-to-r from-pink-400 to-purple-400 object-cover"
        />

        <div>
          <h1 className="text-5xl font-extrabold text-purple-700">
            Anna Sicoli
          </h1>
          <p className="text-xl text-purple-500 mt-2 max-w-lg">
            CS @ UF • Full Stack • Assistive Tech
          </p>
        </div>
      </div>
  </section>

  <section className="w-full bg-purple-500 text-white py-8">
  <div className="px-10">

    <h2 className="text-3xl font-bold mb-6 text-left">
      Technical Skills
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

      {/* LEFT COLUMN */}
      <div className="pr-6">
        <h3 className="text-xl font-semibold mb-5">
          Core Technical Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {["Python", "JavaScript", "TypeScript", "C++", "React", "Next.js"].map(skill => (
            <span
              key={skill}
              className="bg-white text-purple-600 px-5 py-2 rounded-full font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="pl-6">
        <h3 className="text-xl font-semibold mb-5">
          Creative Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {["2D Animation", "3D Modeling", "Game Development", "Unity", "Blender", "Toon Boom Harmony"].map(skill => (
            <span
              key={skill}
              className="bg-white text-purple-600 px-5 py-2 rounded-full font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


<div className="h-10 bg-white"></div>

  <section className="w-full bg-white text-purple-700 py-4 px-10 mt-[-40px] relative z-20 shadow-">
    <div className="flex flex-col gap-6 mt-4"> 
      <h2 className="text-3xl font-bold text-purple-70">Experience</h2>
    
        <ExperienceCard
          title="Software Engineering Apprentice"
          company="American Express"
          duration=" Sept 2025 - Dec 2025"
          bullets={[
            "Shadowed a mentor from American Express, receiving weekly guidance, code reviews, and project support.",
            "Developed an audio visualizer for video games to improve accessibility for users with hearing impairments, using Python, Librosa, PyAudio, and NumPy.",
            "Trained machine learning models to classify game sounds in real-time and designing a GUI overlay to visualize audio cues while filtering irrelevant sounds.",
          ]}
        />      
        
        <ExperienceCard
          title="Research Intern"
          company="GenMedicus"
          duration="June 2025 - Aug 2025"
          bullets={[
            "Conducted research on chronic illness symptoms and healthcare access disparities in Latin America to support underserved populations.",
            "Assisted in writing a grant proposal for a mobile app that tracks and monitors symptoms of chronic illnesses in low-income communities",
            "Analyzed public health data and existing medical literature to support the app’s development and funding justification.",
          ]}
        />

        <ExperienceCard
          title="Data Analyst"
          company="UF Environmental Horticulture Club"
          duration="Aug 2024 - Dec 2025"
          bullets={[
            "Recorded and analyze plant growth to determine health and optimize plant growth regulator (PGR) applications.",
            "Improved data analysis models to improve plant growth predictions and enhance decision making processes .",
          ]}
        />

        <ExperienceCard
          title="Team Captain"
          company="Generational Relief in Prosthetics"
          duration="Aug 2024 - Dec 2025"
          bullets={[
            "Developing an umbrella wheelchair attachment to assist individuals with lower-limb disabilities.",
            "Lead design and developing of a walking cane to detect obstacles to improve safety for the blind and visually impaired.",
            "Oversaw team collaboration, design ideas, and prototype testing using sensors and 3D printing.",
          ]}
        />
      </div>     
    </section>
    </>
    
  );
}
