import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">

        <img src="./logo.png" alt="logo" width={100}/>

        <div className="flexCenter h-menu">
          {/* <a href="" >Create Campaign</a> */}
          <a href="" >All Campaigns</a>
          <a href="" >Contact</a>
          
          <button className="button-3">
            <a href="" >Create Campaign</a>
          </button>
          {/* <a href="" >Login</a> */}
          <button className="button-34">
            <a href="" >Login</a>
          </button>
          <button className="button-34">
            <a href="" >SignUp</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header

