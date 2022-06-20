import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

/*CSS*/
import './style.css'

/*COMPONENTS*/
import Navbar from './components/navbar';
import Footer from './components/footer';
import Notification from './components/notification'

/*PAGES*/
import Home from './pages/home';
import Signup from './pages/signup';
import Welcome from './pages/welcome';
import Profile from './pages/profile';
import Myplants from './pages/myplants';
import Browse from './pages/browse';

function App() {
  const show = useSelector((state) => state.ui.show)
  const type = useSelector((state) => state.ui.type)
  const message = useSelector((state) => state.ui.message)

  return (
    <div className="App">
      {show === true?<Notification type={type} message={message}/>:null}
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/myplants' element={<Myplants/>}/>
          <Route path='/browse' element={<Browse/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
