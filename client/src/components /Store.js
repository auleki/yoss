import React from 'react';

// ADD A CARD TOGGLE ABILITY TO SHUFFLE THROUGH MODES 

const Store = ({ stores }) => {

  const storeLook = (store, i) => (
      <div className="store" key={i}>
        <p>{store.name}</p>
        <p className="location">{ store.location }</p>
        <span>{ store.products }</span>
      </div>
  )

    return (      
      <div>
        {stores.map((store, i) => storeLook(store, i))}
      </div>
    );
  }

export default Store