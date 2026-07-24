import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { PATHS } from "../constants/routes";
import { Suspense } from "react";
import Home from "../pages/Home/Home";
import FAQ from "../pages/FAQ/FAQ";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([{
    path: PATHS.HOME,
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
        { index: true, element: <Suspense fallback={<div>...</div>}><Home /></Suspense> },
        { path: PATHS.FAQ, element: <Suspense fallback={<div>...</div>}><FAQ /></Suspense> },
        { path: PATHS.SERVICES, element: <Suspense fallback={<div>...</div>}><Services /></Suspense> },
        { path: PATHS.CONTACT, element: <Suspense fallback={<div>...</div>}><Contact /></Suspense> },
        { path: "*", element: <NotFound /> }
    ]
}])