import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
import Nosotros from './components/nosotros/Nosotros';
import Servicios from './components/servicios/Servicios';
import Galeria from './components/galeria/Galeria';
import Contacto from './components/contacto/Contacto';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element= { <Home/> } />
        <Route exact path='/nosotros' element= { <Nosotros/> } />
        <Route exact path='/servicios' element= { <Servicios/> } />
        <Route exact path='/galeria' element= { <Galeria/> } />
        <Route exact path='/contacto' element= { <Contacto/> } />
        
        {/* <ItemDetailContainer/>
        <Cart/>   */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
