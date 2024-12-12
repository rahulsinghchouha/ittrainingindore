
import './App.css';
import Navbar from './Component/Common/Navbar';
import Banner from './Component/Home/Banner';
import Course from './Component/Course';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Component/About';



function App() {
  return (
    <div className="">



      {/* Routers */}


      <Router>
        <Routes>
          {/* static Routes */}
          <Route path='/' element={<Banner />} />
          <Route path='/course' element={<Course/>}/>
          <Route path='/about-us' element={<About/>} />
          
        </Routes>
      </Router>




    </div>
  );
}

export default App;
