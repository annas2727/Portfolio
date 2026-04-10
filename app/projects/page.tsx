import ProjectCard from "@/components/projectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white px-10 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          Projects
        </h1>

        <p className="text-lg text-purple-500 mb-12 max-w-2xl">
          
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="EchoSense Audio Visualizer"
            description="An audio visualization tool designed to improve accessibility for gamers who are deaf or hard of hearing by translating directional audio cues into visual signals."
            tech={["Python", "Librosa", "PyAudio", "Machine Learning"]}
            link="https://github.com/annas2727/wicse-shadowing"
          />

      <ProjectCard
        title="Farm Frenzy"
        description="A Plants vs. Zombies-inspired strategy game where players defend their farm against waves of enemies using plant-based defenses, resource management, and grid-based placement mechanics."
        tech={["Unity", "C#", "Game Development", "UI/UX"]}
        link="https://github.com/meack73/DIG3878-Final---Farm-Frenzy"
      />

        <ProjectCard
          title="CarryR Mesh Communication System"
          description="A decentralized, infrastructure-independent communication system built on embedded hardware to enable resilient, self-healing networks for use in disaster response and community connectivity. Focused on multi-node communication, reliability testing, and secure data transmission without reliance on traditional internet infrastructure."
          tech={["C++", "Python", "Embedded Systems", "ESP32", "Networking"]}
          link="https://github.com/LunaVoid/SeniorProjectTLO"
        />

          <ProjectCard
            title="Plant Pop"
            description="A plant themed Android match-3 game built using OpenGL ES with custom shaders, 3D objects, and motion-based controls."
            tech={["Android", "OpenGL ES", "Java"]}
            link="https://github.com/annas2727/PlantPop"
          />

          <ProjectCard
            title="Galaxy Glide"
            description="A 2D endless runner Android game where the user avoids asteroids while collecting aliens."
            tech={["Android", "OpenGL ES", "Java"]}
            link="https://github.com/annas2727/GalaxyGlide"
          />

          <ProjectCard
            title="Urmindr"
            description="A full-stack productivity assistant that integrates calendar scheduling, reminders, and AI-assisted planning."
            tech={["React", "Flask", "Firebase"]}
            link="https://github.com/LunaVoid/UrMindr"
  
          />
        </div>
      </div>
    </main>
  );
}
