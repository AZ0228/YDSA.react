import './App.css';
import Header from './components/Header';


const logo = process.env.PUBLIC_URL + '/LOGO.png';


function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
