import React from 'react';
import Button from '../elements/Button';

const Navbar = () => {
    return (
      <div className="navbar">

          <div className="back">
            <Button>BACK</Button>
          </div>

          <div className="title">
            <h1>Stores</h1>
          </div>

          <div className="search">
            <h3>SEARCH</h3>
          </div>
      </div>
    );
  }

export default Navbar