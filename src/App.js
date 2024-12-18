
import './App.css';

import Banner from './Component/Home/Banner';
import Course from './Component/Course';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Blog from './Component/Blog';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';



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
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/testimonials' element={<Testimonial/>}/> 
          <Route path='/contact-us' element={<Contact/>}/> 
        </Routes>
      </Router>
   </div>
  );
}

export default App;
