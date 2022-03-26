import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

import Cart from '../Cart/Cart';
import Watch from '../Watch/Watch';
import './watches.css';

const Watches = () => {

    
    const [cart, setCart]=useState([]);
    const [choosenWatch, setChoosenWatch] = useState({})

    const handleChooseOne = () => {
        const length = cart.length;
        const randomId = [Math.floor(Math.random() * length)];
        setChoosenWatch(cart[randomId]);
    }

    const handleChooseAgain = () => {
        setCart([]);
        setChoosenWatch([]);
    }

    const [cartKey, setCartKey]=useState(0);

    const handleAddToCart = (watch) => {
        const found = cart.find(element => element.id == watch.id);
        if(!found){
            const newCart=[...cart,watch];
            setCart(newCart);
            setCartKey(watch.id);
        }
    }

    const watchesData = [
        {
          "id": 1,
          "title": "Watch 1",
          "price": 100,
          "url": "https://m.media-amazon.com/images/I/71Gtzq2yqnL._AC_UX522_.jpg"
        },
        {
          "id": 2,
          "title": "Watch 2",
          "price": 200,
          "url": "https://m.media-amazon.com/images/I/81zXq6rNDbL._AC_UX522_.jpg"
        },
        {
          "id": 3,
          "title": "Watch 3",
          "price": 300,
          "url": "https://m.media-amazon.com/images/I/61bizIa5XwL._AC_UX522_.jpg"
        },
        {
          "id": 4,
          "title": "Watch 4",
          "price": 400,
          "url": "https://m.media-amazon.com/images/I/712xd6dVHVL._AC_UX522_.jpg"
        },
        {
          "id": 5,
          "title": "Watch 5",
          "price": 500,
          "url": "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SX522_.jpg"
        },
        {
          "id": 6,
          "title": "Watch 6",
          "price": 600,
          "url": "https://m.media-amazon.com/images/I/51zqF-pyQRL._AC_UX522_.jpg"
        },
        {
          "id": 7,
          "title": "Watch 7",
          "price": 700,
          "url": "https://m.media-amazon.com/images/I/81EfMHVi1WS._AC_UX522_.jpg"
        },
        {
          "id": 8,
          "title": "Watch 8",
          "price": 800,
          "url": "https://m.media-amazon.com/images/I/61L5Jko2QqL._AC_SX425_.jpg"
        },
        {
          "id": 9,
          "title": "Watch 9",
          "price": 900,
          "url": "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY500_.jpg"
        }
      ];

    return (
        <div>
        <Grid container className="mainGrid">
            <Grid item xs={12} md={6} lg={9}>
            <Grid container spacing={5}>
                {
                    watchesData.map(watch=><Watch watch={watch} key={watch.id}
                    handleClick={handleAddToCart}></Watch>)
                }
            </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Cart
                key={cartKey}
                cart={cart}
                handleChooseAgain={handleChooseAgain}
                handleChooseOne={handleChooseOne}
                choosenWatch={choosenWatch}></Cart>
            </Grid>
        </Grid>
  </div>
    );
};

export default Watches;