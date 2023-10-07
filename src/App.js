import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';


const logo = process.env.PUBLIC_URL + '/LOGO.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Info />  
    </div>
  );
}

export default App;
