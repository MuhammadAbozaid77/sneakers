//
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../components/features/PageNotFound";
import AppLayout from "./AppLayout";

//
import Home from "../pages/home/Home";
import Find from "../pages/find/Find";
import Jordan from "../pages/categories/Jordan";
import Sneakers from "../pages/categories/Sneakers";
import RunningShoes from "../pages/categories/RunningShoes";
import FootballShoes from "../pages/categories/FootballShoes";

//
export default function AppRouters() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="find" element={<Find />} />
          <Route path="categories/jordan" element={<Jordan />} />
          <Route path="categories/sneakers" element={<Sneakers />} />
          <Route path="categories/runningShoes" element={<RunningShoes />} />
          <Route path="categories/footballShoes" element={<FootballShoes />} />
        </Route>
      </Routes>
    </>
  );
}
