import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';


function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route  path="/home" element={<Home/>} />
      </Routes>

    </Router>
    </div>
  );
}

export default App;
