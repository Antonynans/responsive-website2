import React from 'react';
import { Footer, InfoSection, Navbar, Pricing } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Navbar />
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Services;