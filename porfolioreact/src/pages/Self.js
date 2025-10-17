import React from "react";

export default function Self() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About</h1>
      <p className="text-slate-600 mt-2">A little about me.</p>
      <div className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
        <p>I build responsive web applications with React, MUI, and modern tooling.</p>
        <p>I enjoy crafting delightful UI interactions and performant frontends.</p>
      </div>
    </main>
  );
}
