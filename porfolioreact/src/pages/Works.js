import React from "react";

export default function Works() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Works</h1>
      <p className="text-slate-600 mt-2">Selected projects and case studies.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Placeholder cards; wire up with your data if added later */}
        {[1,2,3,4,5,6].map((i) => (
          <article key={i} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition p-4">
            <div className="h-36 rounded-lg bg-slate-100 dark:bg-slate-800" />
            <h3 className="mt-4 font-semibold">Project {i}</h3>
            <p className="text-sm text-slate-500">Short description for project {i}.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
