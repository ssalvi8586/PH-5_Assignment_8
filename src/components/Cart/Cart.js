import React from 'react';

import { Button } from '@material-ui/core';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {
    const {cart, handleChooseAgain, handleChooseOne, choosenWatch} = props;
    return (
        <div style={{display: "flex", justifyContent: "center",  flexDirection: "column" }}>
            <h4>Selected Items:</h4>
            {cart.map(item=><CartItem item={item}></CartItem>)}
            <Button onClick={handleChooseOne} variant="outlined" color='primary'>Choose one</Button>
            <Button onClick={handleChooseAgain} variant="outlined" color='secondary'>Choose again</Button>
            
            <h4>Choosen Item:</h4>
            <CartItem item={choosenWatch||""}></CartItem>
        </div>
    );
};

export default Cart;