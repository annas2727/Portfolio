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
            link="https://github.com/yourusername/echosense"
          />

          <ProjectCard
            title="Smart Cane"
            description="An assistive walking cane that detects obstacles and provides haptic and audio feedback to help visually impaired users navigate safely."
            tech={["Arduino", "Ultrasonic Sensors", "3D Printing"]}
          />

          <ProjectCard
            title="Plant Pop"
            description="A plant themed Android match-3 game built using OpenGL ES with custom shaders, 3D objects, and motion-based controls."
            tech={["Android", "OpenGL ES", "Java"]}
          />

          <ProjectCard
            title="Urmindr"
            description="A full-stack productivity assistant that integrates calendar scheduling, reminders, and AI-assisted planning."
            tech={["React", "Flask", "Firebase"]}
          />
        </div>
      </div>
    </main>
  );
}
