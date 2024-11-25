import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className='signup'>
      <h1>Sing Up</h1>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder='Write your name' id='name'  required={true} />
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder='Write your email' id='email' required={true} />
        <label htmlFor="password">Pass:</label>
        <input type="password" placeholder='Write your password' id='password' />
        <button type='submit' onClick={handlerSubmit}>Sing Up</button>
      </form>
      <p className='warning'>This page is only front end, you can't sing up here, sorry :(</p>
    </div>
  )
}

export default SignUp