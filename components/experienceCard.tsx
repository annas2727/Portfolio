interface ExperienceCardProps {
    title: string;
    company: string;
    duration: string;
    bullets: string[];
}

export default function ExperienceCard({
  title,
  company,
  duration,
  bullets
}: ExperienceCardProps) {
  return (
    <div className="p-6 rounded-3xl border-4 border-purple-300 bg-white shadow-md">
      {/* Title + Date */}
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div>
          <h3 className="text-xl font-bold text-purple-700">{title}</h3>
          <p className="text-purple-600 font-medium">{company}</p>
        </div>

        <span className="text-purple-500 text-sm font-semibold whitespace-nowrap">
          {duration}
        </span>
      </div>

      {/* Bullet Points */}
      <ul className="list-disc list-inside mt-3 text-gray-700 leading-relaxed">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}