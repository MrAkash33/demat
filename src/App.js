import logo from './logo.svg';
import './App.css';
import StripHeader from './components/StripHeader';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <StripHeader/>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
