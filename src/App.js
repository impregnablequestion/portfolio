import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Background from './Sketch.js';
import Error from './Error';
import BellJarText from './components/ProjectText/BellJarText';
import Project from './components/Project';
import PPLText from './components/ProjectText/PPLText';
import SynthedText from './components/ProjectText/SynthedText';

function App() {

  return (
    <div className='.App'>
      <Router>
        <Background />
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/portfolio' element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/bell-jar-rota-project' element={
            <Project video="https://vimeo.com/800257110" Text={BellJarText} />
          } />
          <Route path='/power-pong-league-project' element={
            <Project video="https://vimeo.com/800257224" Text={PPLText} />
          } />
          <Route path='/synthed-project' element={
            <Project video="https://vimeo.com/814263635" Text={SynthedText} />
          } />
          <Route path='/github-repos' element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
