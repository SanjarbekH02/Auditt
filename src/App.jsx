import './App.css';
import Background from './Components/Background/Background';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
