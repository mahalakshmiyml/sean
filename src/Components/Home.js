import React from 'react'
import Mainslider from './Includes/Mainslider'
import OurServices from './Overview/OurServices'
import OurCustomers from './Overview/OurCustomers'
import OurProcess from './Overview/OurProcess'
import OurProjects from './Overview/OurProjects'
import Packages from './Overview/Packages'
import WhySean from './Overview/WhySean'

const Home = () => {
  return (
    <div>
        
        <Mainslider /> 
        <OurServices />   
        <WhySean />   
        <OurProcess />
        <OurProjects />
        <Packages />
        <OurCustomers />

    </div>
  )
}

export default Home