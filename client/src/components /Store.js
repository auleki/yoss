import React from 'react';

// ADD A CARD TOGGLE ABILITY TO SHUFFLE THROUGH MODES 

const Store = ({ stores }) => {

  const imgURL = 
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6Lnx9wnYMMhB2u3TSn8jcwHaEK%26pid%3DApi&f=1"

  const storeLook = (store, i) => (
      <div className="store" key={i}>
        <div className="logo">

          <img 
            src={imgURL} 
            alt="store picture"
          />
        </div>

        <div className="description">
          <p className="name">
            Store Name: <span>{store.name}</span>
          </p>
          <p className="location">
            Location: <span>{store.location}</span>
          </p>
          <p className="products">
            Products Available: <span>{ store.products }</span>
          </p>

        </div>
      </div>
  )

  const showStores = 
    stores.map((store, i) => storeLook(store, i))

    return (      
      <div>
        {showStores}
      </div>
    );
  }

export default Store