import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className="left">
            <div className="title">
                <h2>E-commers</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Child</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
            <input type='text' placeholder='Search...'></input>
        </div>
        <div className="right">
            <div className="signin">
            signin / signup
            </div>
            Cart
        </div>

    
    </div>
  )
}

export default Header