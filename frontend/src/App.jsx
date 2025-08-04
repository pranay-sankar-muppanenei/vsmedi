import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import AdvancePhysiotherapy from './components/AdvancePhysioTherapy';
import PrenatalYoga from './components/ParentalYoga';
import Diagnostic from './components/Diagnostic';
import Footer from './layout/Footer';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* 👈 Show Home on `/` */}
        <Route exact path="/advance-physiotherapy" element={<AdvancePhysiotherapy />} 
        /> 
        <Route exact path="/parental-yoga" element={<PrenatalYoga />} />
        <Route exact path='/diagnostic' element={<Diagnostic/>}/>
        <Route exact path='/contact-us' element={<ContactUs/>}/> 
        <Route path='/not-found' element={<NotFound/>}/>
          <Route path="*" element={<NotFound />} />{/* 👈 Show Prenatal Yoga on `/prenatal-yoga` */ }
        {/* You can add more routes here later */}
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
