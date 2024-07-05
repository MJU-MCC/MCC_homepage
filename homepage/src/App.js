import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Study from './components/Study';
import Project from './components/Project';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import StudyPage from './components/StudyPage';
import Footer from './components/Footer';

const App=()=> {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <div className="App-header">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/study' element={<StudyPage/>}/>
            <Route path='/project' element={<Project/>}/>
          </Routes>
          </div>
          <Footer/>
    </div>
    </Router>

  );
}

export default App;
