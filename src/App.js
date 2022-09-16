import 'react-router-dom'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
// import About from './components/About/About';
// import Tarifs from './components/Tarifs/Tarifs';
// import Service from './components/NosServices/Service';
// import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">   
    <NavBar/>           
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/' element={<About/>}/>        
        <Route path='/' element={<Tarifs/>}>Tarifs</Route>         */}
        {/* <Route path='/Réservation' element={<Reservation/>}>Réservation</Route> */}
        {/* <Route path='/Se connecter' element={<Login/>}>Se connecter</Route>   */}
      </Routes> 
    </div>
  );
}

export default App;
