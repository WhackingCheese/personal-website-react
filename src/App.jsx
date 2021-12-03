import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Follower, GlobalStyles } from './components';
import { About, Index, Portfolio, Resume } from './pages';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Follower/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
