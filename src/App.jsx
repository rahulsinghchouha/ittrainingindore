import './App.css';
import Banner from './Component/Home/Banner';
import Course from './Component/Course';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Blog from './Component/Blog';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import CourseDetails from './Component/CourseDetails';
import BlogDetails from './Component/BlogDetails';
import CategoryDetails from './Component/Common/CategoryDetailsPage';
import TagDetails from "./Component/Common/TagDetails";
import Sitemap from './Component/Sitemap';
import Search from './Component/Search';
import NotFoundResponse from './Component/Common/NotFoundResponse';
import Loader from './Component/Common/Loader';



function App() {
  return (
    <div className="">

      {/* Routers */}

      <Router>
        <Routes>
          {/* static Routes */}
          <Route path='/' element={<Banner />} />
          <Route path='/courses' element={<Course/>}/>
          <Route path='/loader' element={<Loader/>}/>
          <Route path='/about-us' element={<About/>} />
          <Route path='/blogs' element={<Blog/>}/>
          <Route path='/testimonials' element={<Testimonial/>}/> 
          <Route path='/contact-us' element={<Contact/>}/> 

          <Route path='/course/:courseName' element={<CourseDetails/>}/>
          <Route path='/:blog' element={<BlogDetails/>}/>
          <Route path='/course-category/:categories' element={<CategoryDetails/>}/>
          
          <Route path='/tag/:tag' element={<TagDetails/>}/>
          <Route path='/sitemap' element={<Sitemap/>}/>
          <Route path='/search/:searchvalue' element={<Search/>}/>
          <Route path='*' element={<NotFoundResponse/>} />
        </Routes>
      </Router>
   </div>
  );
}

export default App;
