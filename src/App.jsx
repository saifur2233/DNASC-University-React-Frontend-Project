import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Admission from './pages/Admission';

function App() {

  return (
      <Router>
          <div className="body_wrap">
              <BackToTop />
              {/* <Preloader /> */}
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  {/* <Route path="/about" element={<About />} /> */}
                  {/* <Route path="/courses" element={<Courses />} /> */}
                  {/* <Route path="/blog" element={<Blog />} /> */}
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/admission" element={<Admission />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  )
}

export default App
