import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import TestPrepPage from "./pages/TestPrepPage";
import StudyAbroadPage from "./pages/StudyAbroadPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />

        <Route
          path="/services/study-abroad-programs"
          element={<StudyAbroadPage />}
        />
        <Route path="/test-prep" element={<TestPrepPage />} />
      </Routes>
    </>
  );
}

export default App;
