import './App.scss';
import Home from './Components/Home';
import Footer from './Components/Includes/Footer';
import Menubar from './Components/Includes/Menubar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurServices from './Components/Overview/OurServices';
import Packages from './Components/Overview/Packages';
import OurProjects from './Components/Overview/OurProjects';
import OurProcess from './Components/Overview/OurProcess';
import WhySean from './Components/Overview/WhySean';

function App() {
  return (
    <div className="App">
      <Router>

      <Menubar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/why-sean" element={<WhySean />}></Route>
      <Route path="/our-services" element={<OurServices />}></Route>
      <Route path="/packages" element={<Packages />}></Route>
      <Route path="/our-projects" element={<OurProjects />}></Route>
      <Route path="/our-process" element={<OurProcess />}></Route>
      
      </Routes>
      <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
