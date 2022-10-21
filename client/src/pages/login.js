import { useState } from 'react';
import axios from 'axios';
import img1 from './images/logo.png';


const Modal = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const login = () => {
    axios.post("http://localhost:3001/login", { 
      email : email , 
      password : password ,
    }).then((response) => {
      if(response.data.message) {
        setError(response.data.message);
      }else{
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        setError(response.data[0].FirstName);
        window.location.reload();
      }
    })
  };


 

  return (
    <div className="wrapper">
      <div align="center" className="form">
      <img src={img1} alt="header" />
        <h1 className="title">Welcome</h1>

        <form >
          <input type="text" value={email} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="example@email.com" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center" className='d_flex'>
            <button onClick={login} type="submit" className="button">
              <span><h1>Login</h1></span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;