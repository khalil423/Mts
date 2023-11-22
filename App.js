import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from'./components/Services';
import Rules from './components/Rules';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<AboutUs/>} />
          <Route path="/Rules" element={<Rules/>} />
          <Route path="/Services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;