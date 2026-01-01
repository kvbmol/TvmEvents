// src/features/events/components/EventCard.jsx
import React from "react";

function formatDateRange(start, end) {
  const startDate = new Date(start);
  const date = startDate.toLocaleDateString(undefined, { day: "numeric", month: "short" });
  const startTime = startDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  return `${date} · ${startTime}`;
}

export function EventCard({ event }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1">
      {/* Remove Link wrapper for now */}
      <div className="flex h-full flex-col cursor-pointer">
        <div className="h-40 w-full overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600">
          <div className="h-full w-full bg-slate-200 animate-pulse" />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <h3 className="line-clamp-2 text-base font-semibold text-slate-900">{event.title}</h3>
          <div className="space-y-1 text-sm text-slate-600">
            <p><time dateTime={event.date}>{formatDateRange(event.date)}</time></p>
            <p>📍 {event.location.city}</p>
            <p className="font-medium text-slate-900">Free</p>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs font-medium text-blue-600">View details →</span>
            <div className="flex gap-1">
              <button className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 p-1">↗</button>
              <button className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 p-1">☆</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
