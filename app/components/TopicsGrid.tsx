const topics = [
  { title: "Accidents", label: "Accidents", color: "from-red-600 to-red-800" },
  { title: "Traffic News", label: "Traffic News", color: "from-yellow-500 to-yellow-700" },
  { title: "Road Network", label: "Road Network and Land Registry", color: "from-blue-600 to-blue-800" },
  { title: "Territorial", label: "Territorial Factors", color: "from-purple-600 to-purple-800" },
  { title: "Safety", label: "Road Safety Interventions", color: "from-green-600 to-green-800" },
  { title: "Network", label: "Works on Regional Road Network", color: "from-indigo-600 to-indigo-800" },
];

export default function TopicsGrid() {
  return (
    <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Topics</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Key areas</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {topics.map((topic, idx) => (
          <div key={topic.label} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white">
            <div className={`h-40 bg-gradient-to-br ${topic.color}`} />
            <div className="space-y-3 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{topic.title}</p>
              <h3 className="text-lg font-semibold text-slate-900">{topic.label}</h3>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span>Explore</span>
                <span className="inline-block h-2 w-2 rounded-full bg-slate-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
