import 'react-router-dom'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';

function App() {
  return (
    <div className="App">   
    <NavBar/>           
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Gallerie' element={<Home/>}/>
        {/* <Route to='/Gallerie' element={<Gallerie/>}>Gallerie</Route>
        <Route to='/Tarifs' element={<Tarifs/>}>Tarifs</Route>
        <Route to='/Réservation' element={<Reservation/>}>Réservation</Route>
        <Route to='/Se connecter' element={<Login/>}>Se connecter</Route>   */}
        <Route path='/' element={<Home/>}/>
      </Routes> 
    </div>
  );
}

export default App;
