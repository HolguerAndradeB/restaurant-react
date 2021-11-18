import { BrowserRouter ,Routes, Route } from "react-router-dom";
import { Login } from "../Components/Login";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Login />} />
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}