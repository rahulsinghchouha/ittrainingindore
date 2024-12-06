
import './App.css';
import Navbar from './Component/Common/Navbar';
import Banner from './Component/Home/Banner';
import Course from './Component/Course';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="">



      {/* Routers */}


      <Router>
        <Routes>
          {/* static Routes */}
          <Route path='/' element={<Banner />} />
          <Route path='/course' element={<Course/>}/>
          






        </Routes>
      </Router>




    </div>
  );
}

export default App;
