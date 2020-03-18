import React from 'react'
import './Header.css';


export const Header = () => {
  return (
    <>
    <div className='header-background'>
      <nav>
        <h1 className='header-title'>Country Info</h1>
        <input placeholder='Search For Specific Country'></input>
      </nav>
    </div>
    </>
  )
}



export default (Header)