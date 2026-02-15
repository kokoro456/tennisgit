import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RulesKato from './pages/RulesKato';
import RulesItf from './pages/RulesItf';
import RulesKta from './pages/RulesKta';
import RulesKata from './pages/RulesKata';
import Equipment from './pages/Equipment';
import Training from './pages/Training';
import Guide from './pages/Guide';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md px-6">
          <div className="max-w-7xl mx-auto h-20 flex justify-between items-center">
            <Link to="/" className="text-2xl font-black italic tracking-tighter uppercase">
              UBUNTU <span className="text-blue-600">TENNIS</span>
            </Link>
            <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <div className="group relative">
                <span className="cursor-default hover:text-blue-600 transition-colors">Rules ▾</span>
                <div className="absolute hidden group-hover:block top-full left-0 bg-white border border-slate-100 shadow-xl rounded-xl p-4 min-w-[160px]">
                  <Link to="/rules-kato" className="block py-2 hover:text-blue-600">KATO Rules</Link>
                  <Link to="/rules-itf" className="block py-2 hover:text-blue-600">ITF Standards</Link>
                  <Link to="/rules-kta" className="block py-2 hover:text-blue-600">KTA Official</Link>
                  <Link to="/rules-kata" className="block py-2 hover:text-blue-600">KATA Official</Link>
                </div>
              </div>
              <Link to="/training" className="hover:text-blue-600 transition-colors">Training</Link>
              <Link to="/equipment" className="hover:text-blue-600 transition-colors">Equipment</Link>
              <Link to="/guide" className="hover:text-blue-600 transition-colors">Guide</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules-kato" element={<RulesKato />} />
          <Route path="/rules-itf" element={<RulesItf />} />
          <Route path="/rules-kta" element={<RulesKta />} />
          <Route path="/rules-kata" element={<RulesKata />} />
          <Route path="/training" element={<Training />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <footer className="bg-slate-900 text-white py-20 px-6 mt-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-6">
              UBUNTU <span className="text-blue-600">TENNIS</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <Link to="/rules-kato">KATO</Link>
              <Link to="/rules-itf">ITF</Link>
              <Link to="/rules-kta">KTA</Link>
              <Link to="/rules-kata">KATA</Link>
              <Link to="/guide">Guide</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <a href="mailto:kokoro456@gmail.com">Contact</a>
            </div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
              © 2026 Ubuntu Tennis Project. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
