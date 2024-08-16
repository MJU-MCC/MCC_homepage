import './App.css';
import Main from './components/Main';
import { BrowserRouter as Routes, Route, useLocation} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import StudyPage from './components/StudyPage';
import Footer from './components/Footer';
import { useEffect } from 'react';


export  function ScrollToTop(){
  const {pathname}=useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return null
}

const App=()=> {

  return (
      <div className="App">
          <Navbar/>
          <div className="App-header">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/study' element={<StudyPage/>}/>
            <Route path='/project' element={<ProjectPage/>}/>
          </Routes>
          </div>
          <Footer/>
    </div>

  );
}

export default App;
