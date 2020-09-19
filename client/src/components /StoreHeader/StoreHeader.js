import React from 'react';
import styles from './StoreHeader.module.sass';

const StoreHeader = (props) => {
  const {storeInfo : { name, address, location, products, logo }} = props
    return (
      <>
        <div className={styles.title}>
              <section className={styles.shop_info}>
                <h2>{ name }</h2>
                <p>{ products } products available</p>
                <p>{ `${address} ${location}` }</p>
              </section>

              <div className={styles.logo}>
                <img src={logo} alt="shop brand"/>
              </div>

        </div>
      </>
    );
  }

export default StoreHeader