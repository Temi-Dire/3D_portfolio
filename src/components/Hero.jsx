import React from 'react'
// import motion from "framer-motion"
import { styles } from '../styles'

const Hero = () => {
  return (
    <div className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-blue-600'/>
         <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-600'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-blue-600'>Temidire</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>I am a front end developer who uses languages like<br className='sm:block hidden'/> ReactJS, NextJS and others to build beatiful websites</p>
        </div>
      </div>
    </div>
  )
}

export default Hero