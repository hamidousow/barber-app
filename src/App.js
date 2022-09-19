import 'react-router-dom'
import Home from './assets/pages/Home';
// import {Routes, Route } from 'react-router-dom'
// import Home from './assets/pages/Home';
import NavBar from './components/NavBar/NavBar';
// import About from './components/About/About';
// import Tarifs from './components/Tarifs/Tarifs';
// import Service from './components/NosServices/Service';
// import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">   
    <NavBar/> 
    <Home/>
    </div>
  );
}

export default App;
