import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import DemoPage from './pages/Demo';
import ArchitecturePage from './pages/Architecture';
import MethodologyPage from './pages/Methodology';
import ResultsPage from './pages/Results';
import TeamContactPage from './pages/TeamContact';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/team" element={<TeamContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;