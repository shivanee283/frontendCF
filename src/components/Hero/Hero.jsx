import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>

            {/* THIS IS THE LEFT SECTION OF THE HERO */}
            <div className='flexColStart hero-left'>
                <div className='hero-title'>
                    <div className='orange-circle'/>
                    <div className='orange2-circle'/>
                    <motion.h1
                    initial={{y: "2rem", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: 'spring'
                    }}
                    // Bridging the Gap Between Customers and Skilled Workers
                    // Connecting Customers & Skilled Workers
                    // Your Gateway to Home Solutions
                    >Investing<br/>for Tomorrow's <br/>Triumph</motion.h1>
                </div>

                <div className='flexColStart hero-description'>
                    <span className='secondaryText'>Forget all difficulties in finding and raising a fund for you</span>
                    <span className='secondaryText'>Explore Opportunities to Fund Your Dreams!<br/>Investment || Donation || Revenue</span>
                </div>

                <div className='flexCenter search-bar'>
                    <HiLocationMarker color='var(--blue)' size={25}/> 
                    <input type='text'/>
                    <button className='button'>Search</button>
                </div>

                <div className='flexCenter stats'>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={7500} end={9800} duration={5}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Contributors
                        </span>
                    </div>

                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={1500} end={3200} duration={5}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Happy Customers
                        </span>
                    </div>

                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp end={50}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Campagins Raised
                        </span>
                    </div>
                </div>
            </div>

            {/* THIS IS THE RIGHT SECTION OF THE HERO */}
            <div className='flexCenter hero-right'>
                <motion.div 
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: 2,
                    type: 'spring'
                }}
                className='image-container'>
                    {/* <img src='./hero-image.png' alt=''/> */}
                    <img src='./hero-image.png' alt=''/>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero