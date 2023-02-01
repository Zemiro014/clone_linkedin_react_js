import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path='home' element={
            <>
              <Header />
              <Home /> 
            </> 
        } />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
