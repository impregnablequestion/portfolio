import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Background from './Sketch.js';
import Error from './Error';

function App() {



  return (
    <div className='.App'>
      <Router>
      <Background/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Home/>}/>
        <Route path='/projects' element={<Home/>}/>
        <Route path='/github-repos' element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
