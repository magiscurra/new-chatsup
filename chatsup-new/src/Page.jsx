import React from 'react'
import NavBar from './pages/NavBar/NavBar'
import Body from './pages2/Body/Body'

function Page() {
  const images = [
    "/images/icon.png",
    "/images/icon2.png",
    "/images/icon3.png",
    "/images/icon.png",
    "/images/icon2.png",
  ]
  return (
    <div className='App'>
      <NavBar/>
      <Body imgSrcArray={images} />
    </div>
  )
}

export default Page
