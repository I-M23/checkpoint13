import logo from './logo.svg';
import './App.css';
import Navigation from './components/NavBar';
import CartesExample from './components/Cartes';
import SlideExample from './components/Slides';

function App() {
  return (
    
    <div className="App">
     <Navigation/>
     <h1>Titre</h1>
     <CartesExample/>
     <SlideExample/>
   
     
    </div>
  );
}

export default App;
