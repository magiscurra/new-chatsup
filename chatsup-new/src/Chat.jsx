import React from 'react'
import NavBar from './pages/NavBar/NavBar'
import Chats from './pages2/chat/chat'
import Nav from './pages2/chat-nav/Nav'

function Chat() {
  return (
    <div className='App'>
      <NavBar/>
      <Nav/>
      <Chats/>
    </div>
  )
}

export default Chat
