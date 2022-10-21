
import "../App"; 
import{useState} from 'react';
import axios from 'axios';

import React from 'react';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpeg';
import img6 from './images/6.jpeg';
import img7 from './images/7.jpeg';
import img8 from './images/8.jpeg';
  
const Home = () => {
  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.reload();
}
  return (
    <div>
  
      <h1>Welcome to Moden</h1>
      <img src={img1} alt="header" />
      <img src={img2} alt="header" />
      <img src={img3} alt="header" />
      <img src={img4} alt="header" />
      <img src={img5} alt="header" />
      <img src={img6} alt="header" />
      <img src={img7} alt="header" />
      <button onClick={()=>{logout()}}>LogOut</button>
  
    </div>
  

  );
};
  
export default Home;