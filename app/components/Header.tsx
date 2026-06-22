export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white ring-1 ring-slate-200">
            <span className="text-xl font-semibold text-sky-600">F</span>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">Road Transport Research Group</p>
            <p className="text-2xl font-bold text-slate-900">FET - UNIVERSITY OF BUEA</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          <a href="#home" className="transition hover:text-slate-900">HOME</a>
          <a href="#overview" className="transition hover:text-slate-900">National Highways</a>
          <a href="#chart" className="transition hover:text-slate-900">Data and Statistics</a>
          <a href="#contact" className="transition hover:text-slate-900">Graphical Results</a>
          <a href="#contact" className="transition hover:text-slate-900">Contact</a>
        </nav>
        <div className="hidden items-center gap-3 text-sm text-slate-700 lg:flex">
          <span>Other Services</span>
          <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
        </div>
      </div>
    </header>
  );
}
