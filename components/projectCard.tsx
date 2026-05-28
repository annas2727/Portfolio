interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  demolink?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  demolink
}: ProjectCardProps) {
  return (
    <div className="p-6 rounded-3xl border-4 border-purple-300 bg-white shadow-md">
      <h3 className="text-2xl font-bold text-purple-700 mb-2">
        {title}
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        {description} 
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-6">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 font-semibold hover:underline cursor-pointer">
          GitHub
        </a>
      )}

      {demolink && (
        <a
          href={demolink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 font-semibold hover:underline cursor-pointer"        >
          Watch Demo
        </a>
      )}
    </div>
    </div>
  );
}
