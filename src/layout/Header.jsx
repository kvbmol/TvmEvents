import React from "react";
export function Header() {
  return (
    <header className="bg-white sticky top-0 ">
    {/* // <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm"> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl">📅</div> 
            <h1 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
              Tvm-Events
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="flex items-center gap-8">
            <a href="#events" className="text-md font-medium text-slate-700 hover:text-blue-600 transition-colors">
              Events
            </a>
            <a href="#calendar" className="text-md font-medium text-slate-700 hover:text-blue-600 transition-colors">
              Calendar
            </a>
            <a href="#map" className="text-md font-medium text-slate-700 hover:text-blue-600 transition-colors">
              Map
            </a>
            <a href="#bookmarks" className="text-md font-medium text-slate-700 hover:text-blue-600 transition-colors">
              Bookmarks
            </a>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              🔍
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
