import React from 'react';
import { Footer, InfoSection, Navbar } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function SignUp() {
  return (
    <>
      <Navbar />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default SignUp;