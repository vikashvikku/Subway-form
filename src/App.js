import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Identity from "./components/Identifications/Identity";
import Name from "./components/Name/Name";
import Navbar from "./components/Navbar/Navbar";
import Personal from "./components/Personal_Information/Personal";
import QR from "./components/QR_Code/QR";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="personal" element={<Personal />} />
        <Route path="identity" element={<Identity />} />
        <Route path="QR" element={<QR />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
