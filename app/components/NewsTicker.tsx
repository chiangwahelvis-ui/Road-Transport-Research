const newsItems = [
  "16/06/2026 01:12 — A1 Douala-Yaoundé: congestion after a minor collision",
  "16/06/2026 02:45 — N1 Bertoua: emergency crews dispatched for roadside incident",
  "16/06/2026 04:10 — N2 Bamenda: incident response team on site",
  "16/06/2026 05:30 — N4 Bafoussam: vehicle breakdown affecting flow",
];

export default function NewsTicker() {
  return (
    <div className="border-y border-slate-800 bg-slate-950/95 text-slate-100">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3 text-sm sm:px-8">
        <span className="flex items-center gap-2 text-sky-300">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
          Latest incident updates
        </span>
        <div className="overflow-hidden whitespace-nowrap text-slate-200">
          <div className="inline-flex animate-marquee gap-10">
            {newsItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
