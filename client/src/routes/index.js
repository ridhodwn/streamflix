import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import HomePage from "../views/HomePage";
import DetailPage from "../views/DetailPage";

const router = createBrowserRouter([
    {
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/:idslug',
                element: <DetailPage />
            }
        ]
    }
]);

export default router;