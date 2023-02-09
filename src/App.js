import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/Login';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    props.userAuthentication();
  }, []);
  
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

const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  };
};

const mapDispatchProps = (dispatch) => ({
  userAuthentication: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchProps)(App)
// export default App;
