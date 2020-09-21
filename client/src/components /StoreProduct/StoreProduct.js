import React from 'react';
import styles from './StoreProduct.module.sass';
import { Link } from 'react-router-dom';
import Button from '../../elements/Button'; 


const StoreProduct = ({products: {name, price, image}}) => {
  // console.log('DUCk----',products)
  // const productImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FM6vHn.png&f=1&nofb=1"

  const addToCart = () => alert(`Added ${name} to cart`)

    return (
      <> 
        <li className={styles.product}>
                  <div className={styles.product_image}>
                    <img src={image} alt="product"/>
                  </div>
                  <div className={styles.product_info}>
                    <div className={styles.bio}>
                      <p className={styles.name}>{ name }</p>
                    </div>

                    <div className={styles.actions}>                        
                        <p className={styles.price}>₦{ price }</p>
                        <Button onClick={addToCart}> 
                          <i className="fas fa-cart-plus"></i>
                        </Button>
                        *
                    
                    </div>
                  </div>

                  
                </li>
                
      </>
    );
  }

export default StoreProduct