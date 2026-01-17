import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";

// Layouts
import RootLayout from "./layouts/RootLayout";
import Taskboard from "./pages/Taskboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="task" element={<Taskboard />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
