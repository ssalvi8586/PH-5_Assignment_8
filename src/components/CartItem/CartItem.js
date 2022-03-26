import React from 'react';

const CartItem = (props) => {
    const {item} = props;
    return (
        <p style={{textAlign: "center"}}>
            {item.title}
        </p>
    );
};

export default CartItem;