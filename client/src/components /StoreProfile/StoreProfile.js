import React from 'react';
import Navbar from '../../commons/Navbar/Navbar';
import styles from './StoreProfile.module.sass'


const StoreProfile = ({ store }) => {
  const imgURL = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.kshs.org%2Ffoundation%2Fgraphics%2Fwalmart_logo.jpg&f=1&nofb=1"
    return (
      <>
        <Navbar profile={true}/>
        <div className={styles.container}>           
            <div className={styles.title}>
              <section className={styles.shop_info}>
                <h2>Store Name</h2>
                <p>15,500 products available</p>
              </section>

              <div className={styles.logo}>
                <img src={imgURL} alt="shop brand" srcset=""/>
              </div>

            </div>
            
            <div className={styles.main}>

            </div>
        </div>
        
      </>
    );
  }

export default StoreProfile