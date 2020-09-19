import React from 'react';
// import styled from 'styled-components';
import Navbar from '../commons/Navbar/Navbar';
import StoreList from './StoreList';

const Homepage = () => {  
    return (
      <div>
        <Navbar />
        <StoreList/>
        
      </div>
    );
  }

export default Homepage