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
import { About, Index, Portfolio, Resume } from './pages';

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
              </Routes>
            </PageContainer>
          </BrowserRouter>
        </ThemeManager>
      </DataManager>
    </LanguageManager>
  );
}

export default App;
