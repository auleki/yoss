import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../../commons/Navbar/Navbar';
import styles from './StoreProfile.module.sass';
// import Button from '../../elements/Button'; 
import StoreProduct from '../StoreProduct/StoreProduct'
import StoreHeader from '../StoreHeader/StoreHeader';

const StoreProfile = ({ store }) => {
  const imgURL = 
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.kshs.org%2Ffoundation%2Fgraphics%2Fwalmart_logo.jpg&f=1&nofb=1"

  
  const storeInfo = {
    name: "Ace Supermarket",
    location: "Ibadan",
    address: "14 baptist road",
    // fullAddress: () => `${address} ${location}`,
    completedTransactions: [],
    products: "16,019",
    logo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.kshs.org%2Ffoundation%2Fgraphics%2Fwalmart_logo.jpg&f=1&nofb=1",
    slogan: "No other place more fun"
  }

  const storeProducts = [
    {
      name: "Milo",
      type: "Beverage",
      price: 1100,
      store: storeInfo.name,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FM6vHn.png&f=1&nofb=1"
    },
    {
      name: "Broom",
      type: "Cleaning",
      price: 500,
      store: storeInfo.name,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F4%2FBroom-PNG-Image-Transparent-Background.png&f=1&nofb=1"
    },
    {
      name: "Ketchup",
      type: "Ingredient",
      price: 780,
      store: storeInfo.name,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fketchup%2Fketchup_PNG14.png&f=1&nofb=1"
    },
    {
      name: "Butter",
      type: "Spreads",
      price: 350,
      store: storeInfo.name,
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fbutter%2Fbutter_PNG31.png&f=1&nofb=1"
    },
    {
      name: "Coke",
      type: "Beverage",
      price: 100,
      store: storeInfo.name,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-coca-cola-cancoca-colacokecarbonated-soft-drinksoft-drinkcoke-can-1411527233399fihip.png&f=1&nofb=1"
    },
    {
      name: "Corn Flakes",
      type: "Cereal",
      price: 1400,
      store: storeInfo.name,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1sca6vi4fbl8x.cloudfront.net%2Fmedia%2Fproduct%2Fimage%2Fe67f2c9a-407d-44cf-aa45-a3d09f8633cb.png.750x750_q85ss0_progressive.png&f=1&nofb=1"
    }
  ]

    return (
      <>
        <Navbar profile={true}/>
        <div className={styles.container}>        
            <StoreHeader storeInfo={storeInfo} />
            
            {/* Display all products */}
            <div className={styles.main}>
              <header>
                <h3>Products</h3>
              </header>
              <ul className={styles.product_list}>
                { storeProducts.map((store, i) => <StoreProduct products={store} key={i}/>) }             
              </ul>
            </div>
        </div>
        
      </>
    );
  }

export default StoreProfile