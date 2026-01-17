import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="bg-neutral-900 text-white w-full h-full">
      <header className="border-b pt-4">
        <nav className="flex justify-between items-center w-auto mx-10">
          <h1 className="text-4xl">Task Tracker</h1>
          <div className="flex gap-8 justify-end text-2xl">
            <NavLink to="/">Home</NavLink>
            <NavLink to="calendar">Calendar</NavLink>
            <NavLink to="task">Tasks</NavLink>
          </div>
        </nav>
      </header>

      <main className="max-w-[1280px] mt-4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
