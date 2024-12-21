import React from 'react'
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <div className='App'>
      <div className="Sec-nav">
        <div className="nav-left">
        <FontAwesomeIcon className='arrow' icon={faArrowLeft} style={{color: "#fff",}} />
        <img className='img' src="/images/icon2.png" alt="" />
        <div className="content">
            <p className='name'>Nickname</p>
            <p className='status'>Online</p>
        </div>
        </div>
        <div className="nav-right">

        </div>
      </div>
    </div>
  )
}

export default Nav
