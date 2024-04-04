//
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../components/features/PageNotFound";
import AppLayout from "./AppLayout";

//
import Home from "../pages/home/Home";

//
export default function AppRouters() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
