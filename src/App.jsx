import { Routes, Route, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import TestPrepPage from "./pages/TestPreparationPage";
import StudyAbroadPage from "./pages/StudyAbroadPage";
import CareerCounselingPage from "./pages/CareerCounselingPage";
import FinancialLoanSupportPage from "./pages/FinancialLoanSupportPage";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
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
        <Route path="/services/test-preparation" element={<TestPrepPage />} />
        <Route
          path="/services/financial-loan-support"
          element={<FinancialLoanSupportPage />}
        />
      </Routes>
    </>
  );
}

export default App;
