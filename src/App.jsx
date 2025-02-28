import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import TestPrepPage from "./pages/TestPrepPage";
import StudyAbroadPage from "./pages/StudyAbroadPage";
import CareerCounselingPage from "./pages/CareerCounselingPage";
import FinancialLoanSupportPage from "./pages/FinancialLoanSupportPage";

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
        <Route
          path="/services/career-counseling"
          element={<CareerCounselingPage />}
        />
        <Route path="/test-prep" element={<TestPrepPage />} />
        <Route path="/loan" element={<FinancialLoanSupportPage />} />
      </Routes>
    </>
  );
}

export default App;
