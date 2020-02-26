import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import What from './components/What';
import Services from './components/Services';
import Products from './components/Products';
import Clients from './components/Clients';
import Contact from './components/Contact';
import LanguageContextProvider from './contexts/LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Navbar/>
        <Home/>
        <What/> 
        <Services/> 
        <Products/>
        <Clients/>
        <Contact/>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
