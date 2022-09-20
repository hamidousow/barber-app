import 'react-router-dom'
import About from './About/About';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Hero from './Hero/Hero';
import NavBar from './NavBar/NavBar';
import Service from './NosServices/Service';


function App() {
  return (
    <div className="App">   
      <NavBar/> 
      <Hero/>
      <About/>
      <Service/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
