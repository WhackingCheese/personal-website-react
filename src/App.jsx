import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Index from './pages/index';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';


function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Index/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/portfolio' element={ <Portfolio/> } />
          <Route path='/resume' element={ <Resume/> } />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
