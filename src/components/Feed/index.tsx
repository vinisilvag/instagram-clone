import React from 'react';

export const Feed: React.FC = () => (
  <section className="px-4 lg:px-0">
    <section className="flex flex-row max-w-5xl m-auto mt-6">
      <main className="flex-1 bg-gray-100">
        <h1>Feed</h1>
      </main>

      <section className="w-80 ml-6 hidden md:flex self-start bg-gray-100">
        <h1>Aside</h1>
      </section>
    </section>
  </section>
);
