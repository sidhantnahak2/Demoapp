import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>


        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;