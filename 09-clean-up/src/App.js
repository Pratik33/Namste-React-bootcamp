import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

//import AboutUsComponent from "./component/AboutUsComponent";
//import TeamMembersComponent from "./component/TeamMembersComponent";
//import TeamMemberDetails from "./component/TeamMemberDetails";
import ErrorElement from "./component/ErrorElement";
import AppLayoutComponent from "./component/AppLayoutComponent";
import Loading from "./component/LoadingComponent";

const AboutUsComponent = lazy(() => {
  return import("./component/AboutUsComponent");
});

const TeamMembersComponent = lazy(() =>
  import("./component/TeamMembersComponent")
);

const TeamMemberDetails = lazy(() => {
  return import("./component/TeamMemberDetails");
});

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <AboutUsComponent />
          </Suspense>
        ),
      },
      {
        path: "/team-members",
        element: (
          <Suspense fallback={<Loading />}>
            <TeamMembersComponent />
          </Suspense>
        ),
      },
      {
        path: "/team-members/:teamMemberId",
        element: (
          <Suspense fallback={<Loading />}>
            <TeamMemberDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
