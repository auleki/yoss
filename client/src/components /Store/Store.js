import React from 'react';
import { Link } from 'react-router-dom'
// import StoreProfile from './StoreProfile';
import styles from './Store.module.sass';

// ADD A CARD TOGGLE ABILITY TO SHUFFLE THROUGH MODES 

const Store = ({ stores }) => {

  const imgURL = 
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6Lnx9wnYMMhB2u3TSn8jcwHaEK%26pid%3DApi&f=1"

  const storeLook = (store, i) => (
      <div className={styles.store} key={i}>
        <div className={styles.logo}>

          <img 
            src={imgURL} 
            alt="store avatar"
          />
        </div>

        <div className={styles.description}>
          <p className={styles.name}>
            Store Name: <span>{store.name}</span>
          </p>
          <p className={styles.location}>
            Location: <span>{store.location}</span>
          </p>
          <p className={styles.products}>
            Products Available: <span>{ store.products }</span>
          </p>
        </div>

        <div className={styles.view}>
        <Link to="/store-profile">
          <span className={styles.link_text}>
            View Store
          </span>
          <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </div>
  )

  const showStores = 
    stores.map((store, i) => storeLook(store, i))

    return (      
      <div>
        {showStores}
      </div>
    )
  }

export default Store