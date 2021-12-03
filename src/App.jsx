import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Follower } from './components';


import Index from './pages/index';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';


import { ThemeProvider } from 'styled-components';

let themes = {
  "light": {
    'primary': '#3E4455',
    'accent': '#FF023E',
    'background': '#FFFFFF'
  }
}



function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={themes.light}>
          <Follower/>
          <Header/>
          <Routes>
            <Route path='/' element={ <Index/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/portfolio' element={ <Portfolio/> } />
            <Route path='/resume' element={ <Resume/> } />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
