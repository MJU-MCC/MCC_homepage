import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './navigation/Nav';
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
        {/* <header className="App-header"> */}
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
        {/* </header> */}
    </div>
    </Router>

  );
}

export default App;
