export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://cameroonnewsagency.com/wp-content/uploads/2017/06/central-administration1.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6 text-white">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-200">
            Accident monitoring
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Cameroon Road Accident Data Collection System
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-200">
            Present a visual proof of work with a dashboard inspired by CEREMSS, showing road incidents, regional data and emergency response metrics.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#chart" className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500">
              View incident chart
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40">
              Request demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
