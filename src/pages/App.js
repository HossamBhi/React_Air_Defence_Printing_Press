import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/app.css";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import ServiceDetails from "./ServiceDetails";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="service/:catId/:serviceId" element={<ServiceDetails />} />
        <Route path="search/:words" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
