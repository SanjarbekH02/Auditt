import { Route, Routes } from 'react-router-dom';
import './App.css';
import Background from './Components/Background/Background';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses'
import ListCourses from './Pages/ListCourses/ListCourses';
import ScrollToTop from './Components/ScrollTop/ScrollTop';
// import Quiz from './Pages/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Background />
       <Navbar />
       <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<ListCourses />} />
        <Route path='/courses/:id' element={<Courses />} />
        {/* <Route path='/quiz' element={<Quiz />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
