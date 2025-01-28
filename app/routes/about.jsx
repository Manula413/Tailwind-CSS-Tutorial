import { Link } from "@remix-run/react";
import "../tailwind.css";


export default function About() {
  return (
    <html lang="en">
      <head>
        <title>About Us</title>
      </head>
      <body className="bg-gray-100 text-gray-900 font-sans">
        
        <main className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the About Page</h2>
          <p className="text-lg mb-4">This page contains information about our app.</p>
        </main>
        
      </body>
    </html>
  );
}
