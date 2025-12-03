import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;