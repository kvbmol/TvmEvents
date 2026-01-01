
import React from "react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-600">
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Tvm-Events</h3>
            <p>Discover local events, workshops & meetups in Thiruvananthapuram.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Calendar</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Map</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600">Twitter</a>
              <a href="#" className="hover:text-blue-600">GitHub</a>
              <a href="#" className="hover:text-blue-600">Email</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-8 pt-8 text-center text-xs text-slate-500">
          © 2025 TvmEvents. Made with ❤️ in Thiruvananthapuram.
        </div>
      </div>
    </footer>
  );
}

