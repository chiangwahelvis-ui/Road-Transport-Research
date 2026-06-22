import AccidentChart from "./components/AccidentChart";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import MapPanel from "./components/MapPanel";
import NewsTicker from "./components/NewsTicker";
import TopicsGrid from "./components/TopicsGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <HeroBanner />
        <NewsTicker />

        <section className="mx-auto grid w-full gap-8 px-6 py-10 lg:grid-cols-[1.4fr_0.9fr] lg:px-8">
          <MapPanel />
          <TopicsGrid />
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Accident analytics</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Cameroon road incident trends in one place.
                </h2>
              </div>
              <div className="space-y-2 rounded-3xl bg-white p-4 text-sm text-slate-600 sm:text-right">
                <p className="font-semibold text-slate-900">Current focus</p>
                <p>Douala, Yaoundé and major national roads</p>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] bg-white p-6">
              <AccidentChart />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600">Quick facts</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">328 incidents</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Reported this quarter across Cameroon’s main highways and regions.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600">Response rate</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">94%</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Average emergency response readiness across all monitored regions.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600">Regions monitored</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">6</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Centre, Littoral, West, North West, South West, East</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
