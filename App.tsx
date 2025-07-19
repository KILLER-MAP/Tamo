
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GenericPage from './pages/GenericPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prisijungti" element={<LoginPage />} />
            <Route path="/apie-tamo" element={<AboutPage />} />
            <Route path="/tevams" element={<GenericPage title="Tėvams" />} />
            <Route path="/mokiniams" element={<GenericPage title="Mokiniams" />} />
            <Route path="/mokytojams" element={<GenericPage title="Mokytojams" />} />
            <Route path="/mokykloms" element={<GenericPage title="Mokykloms" />} />
            <Route path="/susisiekite" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
