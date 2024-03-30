import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CustomSpinner from "../Spinner/CustomSpinner";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const NotFounded = lazy(() => import("../NotFounded/NotFounded"));
const TicketsIndexPage = lazy(
  () => import("../TicketsIndexPage/TicketsIndexPage")
);
const TicketsCreatePage = lazy(
  () => import("../TicketsCreatePage/TicketsCreatePage")
);
const TicketDetails = lazy(() => import("../TicketsCreatePage/TicketDetails"));
const TicketsEditPage = lazy(
  () => import("../TicketsCreatePage/TicketsEditPage")
);
const TicketDeletePage = lazy(
  () => import("../TicketsCreatePage/TicketDeletePage")
);

const GlobalRouter = () => {
  return (
    <Suspense fallback={<CustomSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tickets">
          <Route index element={<TicketsIndexPage />} />
          <Route path="create" element={<TicketsCreatePage />} />
          <Route path=":id" element={<TicketDetails />} />
          <Route path="edit/:id" element={<TicketsEditPage />} />
          <Route path="delete/:id" element={<TicketDeletePage />} />
        </Route>
        <Route path="/404" element={<NotFounded />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Suspense>
  );
};

export default GlobalRouter;
