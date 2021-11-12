import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer titulo='Hola Mundo Coders'/>
    </>
  );
}

export default App;
