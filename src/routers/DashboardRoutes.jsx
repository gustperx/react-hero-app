import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/ui/NavBar";
import { DcPage } from "../components/dc/DcPage";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { SearchPage } from "../components/search/SearchPage";
import { HeroPage } from "../components/hero/HeroPage";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto pt-4">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />

          <Route path="/" element={<MarvelPage />} />
        </Routes>
      </div>
    </>
  );
};
