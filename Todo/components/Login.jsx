import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // Hook for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === 'admin' && password === 'admin') {
      onLogin(); // Call the parent function to handle login
      navigate('/home');  // Redirect to the home page after successful login
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className=" w-full h-screen  bg-black   ">
      <div className='flex  justify-center  '>
    <div className='flex  items-center flex-col mt-8 py-4  w-auto h-auto  rounded bg-[#f0f0g0]  border-2 border-white '>
    <h2 className='text-white flex p-2  text-2xl font-bold ' >Login</h2>

      <form onSubmit={handleSubmit} className='mt-4 px-4 py-4  flex flex-col justify-center gap-3' >
        <div >
          <label htmlFor="email" className='text-white px-2'>Username</label>
          <br />
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username"
            className='bg-white w-auto mx-2 px-1 py-1 rounded'
            required
          />
        </div>
        <div>
          <label htmlFor="password" className='text-white px-2'>Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
              className='bg-white w-auto mx-3 px-1 py-1 rounded'
            required
          />
        </div>
        <button type="submit" className='text-white  hover:text-black justify-center border border-yellow-200 px-2 mx-3 rounded hover:bg-yellow-100'>Login</button> 
      </form>
    </div>
      
     
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}  
    </div>
  );
}

export default Login;
