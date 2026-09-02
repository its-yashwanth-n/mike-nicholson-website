import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { BooksPage } from "@/pages/BooksPage";
import { ReadBookPage } from "@/pages/ReadBookPage";
import { FilmsPage } from "@/pages/FilmsPage";
import { ArtPage } from "@/pages/ArtPage";
// import { EnvironmentPage } from "@/pages/EnvironmentPage";
import { RowingPage } from "@/pages/RowingPage";
import { RubberyFiguresPage } from "@/pages/RubberyFiguresPage";
// import { TokyoOlympicsPage } from "@/pages/TokyoOlympicsPage";
import { MubcTokyoTripPage } from "@/pages/MubcTokyoTripPage";
import { TravelPage } from "@/pages/TravelPage";
import { LinksPage } from "@/pages/LinksPage";
import { TheNewIdeaPage } from "@/pages/TheNewIdeaPage";
import { BrissyPage } from "@/pages/BrissyPage";
import { RadioMubcPage } from "@/pages/RadioMubcPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="book/:bookname" element={<ReadBookPage />} />
          <Route path="films" element={<FilmsPage />} />
          <Route path="art" element={<ArtPage />} />
          {/* <Route path="environment" element={<EnvironmentPage />} /> */}
          <Route path="rowing" element={<RowingPage />} />
          <Route path="rubbery-figures" element={<RubberyFiguresPage />} />
          {/* <Route path="tokyo-olympics" element={<TokyoOlympicsPage />} /> */}
          <Route path="mubc-tokyo-trip" element={<MubcTokyoTripPage />} />
          <Route path="travel" element={<TravelPage />} />
          <Route path="links" element={<LinksPage />} />
          <Route path="the-new-idea" element={<TheNewIdeaPage />} />
          <Route path="brissy-32" element={<BrissyPage />} />
          <Route path="brissy-32/radio-interview" element={<RadioMubcPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
