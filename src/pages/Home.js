import React from 'react'

import {Hero,Projects,AboutMe,Contact} from "../container"
import Navbar from '../components/Navbar/Navbar'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <AboutMe/>
      <Contact/>
    </div>
  )
}

export default Home;
