import React from 'react';
import { Footer, InfoSection, Navbar } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

function Products() {
  return (
    <>
      <Navbar />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  );
}

export default Products;