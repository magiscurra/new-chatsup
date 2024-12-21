import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chat from './Chat'
//import App from './App';
//import Page from './Page';
//import App2 from './App2';
//import App3 from './App3';
//import SignUp from './SignUp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chat/>
  </StrictMode>,
)
