import React from 'react';
import Store from './Store';

const StoreList = ({ store }) => {

  const stores = [
    {
      name: "Kimono Stores",
      location: "Lagos",
      products: 25,
    },
    {
      name: "The Salavadore Club",
      location: "Sokoto",
      products: 83,
    },
    {
      name: "Houdini Grade",
      location: "Imo",
      products: 17,
    },
    {
      name: "Veto Square",
      location: "Jos",
      products: 39,
    },
    {
      name: "Derlo Pathway",
      location: "Enugu",
      products: 55,
    },
    {
      name: "Weiner Drones",
      location: "Osun",
      products: 78,
    }

  ]

    return (
      <>
        {/* <h1>HI</h1> */}
        <Store stores={stores} />
      </>
    );
  }

export default StoreList