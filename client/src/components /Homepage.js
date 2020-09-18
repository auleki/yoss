import React from 'react';
import styled from 'styled-components';

const Homepage = () => {

  const Button = styled.button`
  background-color: #333;
  color: #fff;
  border-radius: .3rem;
  padding: 1rem 1.5rem;
  outline: 0;
  border: 0;  
  `
  
    return (
      <div>
        <div className="navbar">

          <div className="back">
            <h3>BACK</h3>
          </div>

          <div className="title">
            <h1>Stores</h1>
          </div>

          <div className="search">
            <h3>SEARCH</h3>
          </div>
        </div>
        
      </div>
    );
  }

export default Homepage