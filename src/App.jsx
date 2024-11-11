import { Route, Routes } from 'react-router-dom';
import './App.css';
import Background from './Components/Background/Background';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import ListCourses from './Pages/ListCourses/ListCourses';
import Lessons from './Components/Lessons/Lessons';

function App() {
  return (
    <div className="App">
      <Background />
       <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Lessons />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
