import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WelcomePage from "./pages/WelcomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import "react-calendar/dist/Calendar.css";
import { PageProvider } from "./context/pageContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageProvider>
      <RouterProvider router={router} />
    </PageProvider>
  </StrictMode>
);
