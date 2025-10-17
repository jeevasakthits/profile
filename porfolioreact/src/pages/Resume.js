import React from "react";

export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
      <h1>Resume</h1>
      <p>Download or view my resume.</p>
      <ul>
        <li><a className="text-blue-600" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></li>
      </ul>
    </main>
  );
}
