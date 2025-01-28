import { Links, Link, Meta, Outlet, Scripts } from "@remix-run/react";
import "./tailwind.css";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="icon" href="data:image/x-icon;base64,AA" />
      </head>
      <body className="bg-gray-100 text-gray-900 font-sans flex flex-col min-h-screen">
        <header className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo / Title */}
            <h1 className="text-4xl font-extrabold tracking-wide">
              <span className="text-yellow-300">Tailwind</span> CSS App
            </h1>

            {/* Navigation */}
            <nav className="flex gap-6 text-lg">
              <Link
                to="/"
                className="text-white hover:text-yellow-300 hover:underline transition duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-yellow-300 hover:underline transition duration-200"
              >
                About
              </Link>
            </nav>
          </div>
        </header>


        {/* Render the active route's content */}
        <main className="p-8">
          <Outlet />
        </main>

        {/* Shared footer */}
        <footer className="bg-blue-600 text-white text-center py-4 mt-auto">
          <p>2025 Tailwind CSS App. All rights reserved.</p>
        </footer>

        <Scripts />
      </body>
    </html>
  );
}
