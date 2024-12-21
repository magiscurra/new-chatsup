import React from 'react'
import NavBar from './components/navBar/navBar.jsx';
import Logo from './components/MainLogo/MainLogo.jsx';
import Body from './components/Body/Body.jsx';

function SignUp() {
  return (
    <div className='signUp'>
      <NavBar/>
      <Logo/>
      <Body/>
    </div>
  )
}

export default SignUp