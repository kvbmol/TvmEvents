import React from 'react';
import { Header } from './layout/Header';
import { EventCard } from './features/events/components/EventCard';
import { Footer } from './layout/Footer';
import './index.css';

function App() {
  const sampleEvent = {
    id: '1',
    title: 'React Meetup Thiruvananthapuram',
    category: 'Tech',
    date: '2025-01-15T18:00:00Z',
    location: { city: 'TVM', venue: 'Technopark' },
    price: 0
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Discover Local Events
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Workshops, meetups, and community events in Thiruvananthapuram
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <EventCard event={sampleEvent} />
            <EventCard event={sampleEvent} />
            <EventCard event={sampleEvent} />
            <EventCard event={sampleEvent} />
            <EventCard event={sampleEvent} />
            <EventCard event={sampleEvent} />
          </div>
        </div>
      </main>
      
     <Footer /> 
    </div>
  );
}


export default App;
