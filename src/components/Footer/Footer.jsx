import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>

            {/*LEFT SIDE*/}
            <div className='flexColStart f-left'>
                <img src='./logo2.png' alt='' width={120}/>
                <span className='secondaryText'>
                    Vision MissionVision MissionVision Mission<br/>
                    Vision MissionVision MissionVision
                </span>
            </div>

            {/*LEFT SIDE*/}
            <div className='flexColStart f-right'>
                <span className='primaryText'>Know About Us</span>
                <span className='secondaryText'>MyAddress MyAddress MyAddress<br/>
                MyAddressMyAddress</span>

                <div className='flexCenter f-menu'>
                    <span>Mission</span>
                    <span>Vision</span>
                    <span>Services</span>
                    <span>About US</span>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Footer