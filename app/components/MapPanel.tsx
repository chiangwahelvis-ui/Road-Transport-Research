"use client";

import MapLeaflet from "./MapLeaflet";

const provinces = [
  "Centre",
  "Littoral",
  "West",
  "North West",
  "South West",
  "East",
];

const roads = [
  "N1 Douala-Yaoundé",
  "N2 Bamenda-Bafoussam",
  "N4 Bafoussam-Buea",
  "A1 Douala-Port",
  "N5 Yaoundé-Bafang",
];

export default function MapPanel() {
  return (
    <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Provinces</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Choose an option</h2>
        </div>
        <div className="inline-flex rounded-full bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
          Select region
        </div>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[0.96fr_0.96fr]">
        <div className="space-y-4 rounded-[28px] border border-slate-200 bg-white p-5">
          <label className="text-sm font-medium text-slate-300" htmlFor="province">
            Province
          </label>
          <select id="province" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-sky-500">
            {provinces.map((province) => (
              <option key={province} value={province} className="bg-slate-900 text-slate-100">
                {province}
              </option>
            ))}
          </select>
          <div className="rounded-3xl bg-white p-4 text-sm text-slate-600">
            Provinces and Municipalities of Cameroon
          </div>
        </div>

        <div className="space-y-4 rounded-[28px] border border-slate-200 bg-white p-5">
          <label className="text-sm font-medium text-slate-300" htmlFor="road">
            Roads
          </label>
          <div className="flex gap-3">
            <select id="road" className="flex-1 rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-sky-500">
              {roads.map((road) => (
                <option key={road} value={road} className="bg-slate-900 text-slate-100">
                  {road}
                </option>
              ))}
            </select>
            <button className="rounded-2xl bg-sky-500 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-400">
              Go to Road
            </button>
          </div>
          <div className="rounded-3xl bg-white p-4 text-sm text-slate-600">
            Road: N1 Douala-Yaoundé
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 rounded-[28px] border border-slate-200 bg-white p-6 lg:grid-cols-1">
        <div>
          <p className="text-base font-semibold text-slate-900">Provinces and Municipalities of Cameroon</p>
          <div className="mt-5 h-[300px] rounded-3xl border border-slate-200 bg-white">
            <MapLeaflet />
          </div>
        </div>
      </div>
    </div>
  );
}
