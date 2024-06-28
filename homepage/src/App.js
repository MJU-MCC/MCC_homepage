import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './navigation/Nav';
import About from './components/About';
import Study from './components/Study';
import Project from './components/Project';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App=()=> {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/study' element={<Study/>}/>
            <Route path='/project' element={<Project/>}/>
          </Routes>
        </header>
    </div>
    </Router>

  );
}

export default App;
