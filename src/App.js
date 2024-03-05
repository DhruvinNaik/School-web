import './App.css';
import Navbar from './Common/Navbar.js';
import Footer from './Common/Footer.js';
import Homebanner from './Pages/Home/Homebanner.js';
import Home from './Pages/Home/Home.js';
import Content from './Pages/Home/Content.js';
import Courses from './Pages/Home/Courses.js';
import Choosblock from './Pages/Home/Block.js';
import Contact from './Pages/Contact/Contact.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coursespage from './Pages/Courses/Coursespage.js';
import Admission from './Pages/Admission/Admission.js';
import Pagenotfound from './Pages/NotFound/Pagenotfound.js';


function App() {
  return (
<>
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/courses' element={<Coursespage/>} />
        <Route path='/admission' element={<Admission/>} />
        <Route path='/*' element={<Pagenotfound/>} />
    </Routes>
</BrowserRouter>

    </>
  );
}

export default App;
