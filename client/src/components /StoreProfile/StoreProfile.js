import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../../commons/Navbar/Navbar';
import styles from './StoreProfile.module.sass';
// import Button from '../../elements/Button'; 
import StoreProduct from '../StoreProduct/StoreProduct'




const StoreProfile = ({ store }) => {
  const imgURL = 
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.kshs.org%2Ffoundation%2Fgraphics%2Fwalmart_logo.jpg&f=1&nofb=1"

    return (
      <>
        <Navbar profile={true}/>
        <div className={styles.container}>        
           
            <div className={styles.title}>
              <section className={styles.shop_info}>
                <h2>Alfonz Mall</h2>
                <p>15,500 products available</p>
                <p>20 aukoda street, Auseome avenue Lagos</p>
              </section>

              <div className={styles.logo}>
                <img src={imgURL} alt="shop brand" srcset=""/>
              </div>

            </div>
            
            {/* Display all products */}
            <div className={styles.main}>
              <header>
                <h3>Products</h3>

              </header>
              <ul className={styles.product_list}>
                <StoreProduct />               
                <StoreProduct />               
                <StoreProduct />                            
                <StoreProduct />               
              </ul>
            </div>
        </div>
        
      </>
    );
  }

export default StoreProfile