import { HashRouter, Routes, Route } from 'react-router-dom';
import { Follower, GlobalStyles, Navigation, LanguageManager, ThemeManager, PageContainer, DataManager, PageContainerInner } from './components';
import Footer from './components/Footer/Footer';
import { About, Index, Portfolio, Resume, NotFound, Courses } from './pages';

function App() {
  return (
    <LanguageManager>
      <DataManager>
        <ThemeManager>
          <GlobalStyles/>
          <Follower/>
          <HashRouter>
            <Navigation/>
            <PageContainer>
              <PageContainerInner>
                <Routes>
                  <Route path='/' element={<Index/>}/>
                  <Route path='/about/' element={<About/>}/>
                  <Route path='/portfolio/' element={<Portfolio/>}/>
                  <Route path='/resume/' element={<Resume/>}/>
                  <Route path='/courses/' element={<Courses/>}/>
                  <Route path='*' element={<NotFound/>}/>
                </Routes>
              </PageContainerInner>
              <Footer/>
            </PageContainer>
          </HashRouter>
        </ThemeManager>
      </DataManager>
    </LanguageManager>
  );
}

export default App;
