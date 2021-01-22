import React from 'react'
import { Footer, InfoSection, Navbar, Pricing } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

const Home = () => {
    return (
        <>
            <Navbar />
           <InfoSection {...homeObjOne} /> 
           <InfoSection {...homeObjThree} /> 
           <InfoSection {...homeObjTwo} /> 
           <Pricing />
           <InfoSection {...homeObjFour} /> 
           <Footer />
        </>
    )
}

export default Home;
