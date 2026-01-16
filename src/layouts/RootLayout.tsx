import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header className="border-b  mt-4">
        <nav className="flex justify-between items-center w-auto mx-10">
          <h1 className="text-4xl">Task Tracker</h1>
          <div className="flex gap-8 justify-end text-4xl">
            <NavLink to="/">Home</NavLink>
            <NavLink to="calendar">Calendar</NavLink>
          </div>
        </nav>
      </header>

      <main className="max-w-[1200px] mx-auto w-auto">
        <Outlet />
      </main>
    </div>
  );
}
