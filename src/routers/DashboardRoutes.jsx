import { Navigate, Route, Routes } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/NavBar";
import Vite from "../components/Vite/Vite";

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Vite />} />
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/hero/:heroeId" element={<HeroScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/*" element={<Navigate to="/app/" />} />
        </Routes>
      </div>
    </>
  );
};
