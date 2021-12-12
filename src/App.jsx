import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Follower,
  GlobalStyles,
  Navigation,
  LanguageManager,
  ThemeManager,
  PageContainer,
  DataManager
} from './components';
import Footer from './components/Footer/Footer';
import { About, Index, Portfolio, Resume, NotFound } from './pages';

function App() {
  return (
    <LanguageManager>
      <DataManager>
        <ThemeManager>
          <GlobalStyles/>
          <Follower/>
          <BrowserRouter>
            <Navigation/>
            <PageContainer>
              <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
              <Footer/>
            </PageContainer>
          </BrowserRouter>
        </ThemeManager>
      </DataManager>
    </LanguageManager>
  );
}

export default App;
