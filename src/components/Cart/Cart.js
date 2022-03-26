import React from 'react';

import { Button } from '@material-ui/core';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div style={{display: "flex", justifyContent: "center",  flexDirection: "column" }}>
            <h4>Selected Items:</h4>
            {cart.map(item=><CartItem item={item}></CartItem>)}
            <Button variant="outlined" color='primary'>Choose one</Button>
            <Button variant="outlined" color='secondary'>Choose again</Button>
        </div>
    );
};

export default Cart;