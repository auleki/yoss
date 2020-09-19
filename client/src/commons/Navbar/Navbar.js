import React from 'react';
import Button from '../../elements/Button';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.sass'

const Navbar = ({profile}) => {
  return (
      <div className={styles.navbar}>

          <div className={styles.back}>
            <Link to="/">
              <Button>
                <i className="fas fa-arrow-left"></i>
              </Button>
            </Link>

          </div>

          <div className={styles.title}>
            { profile ? "" : <h1>Stores</h1> }            
          </div>

          <div className={styles.search}>
            <Button>
              <i className="fas fa-search"></i>
            </Button>
            
          </div>
      </div>
    );
  }

export default Navbar