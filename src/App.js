import MainHeader from "./UI/MainHeader";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Home from "./pages/Home";
import SeasonsPage from "./pages/SeasonsPage";
import LeagueTablePage from "./pages/LeagueTablePage";

function App() {
  return (
    <div className={classes.app}>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/seasons/:id" element={<SeasonsPage />} />
          <Route path="/leaguetable/:id" element={<LeagueTablePage />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
