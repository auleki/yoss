import React from 'react';
import styles from './StoreProduct.module.sass';
import { Link } from 'react-router-dom';
import Button from '../../elements/Button'; 


const StoreProduct = (props) => {
  const productImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FM6vHn.png&f=1&nofb=1"

  const addToCart = () => alert('Added to cart')

    return (
      <>
        <li className={styles.product}>
                  <div className={styles.product_image}>
                    <img src={productImg} alt="product"/>
                  </div>
                  <div className={styles.product_info}>
                    <div className={styles.bio}>
                      <p className={styles.name}>Milo</p>
                      <p className={styles.price}>N70</p>
                    </div>

                    <div className={styles.actions}>
                      {/* <Link to="/buy"> */}
                        {/* Add to cart */}
                        
                        <Button onClick={addToCart}> 
                          <i class="fas fa-cart-plus"></i>
                        </Button>
                        
                      {/* </Link> */}
                    </div>
                  </div>

                  
                </li>
      </>
    );
  }

export default StoreProduct