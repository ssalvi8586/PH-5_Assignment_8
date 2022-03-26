import React from 'react';
import { useState, useEffect } from 'react';

// useEffect

const Watches = () => {
    const [watches,setWatches] = useState([]);

    useEffect(()=>{
        fetch('watchData.json').
        then(response => response.text()).
        then(data => setWatches(data));
    },[]); 
    return (
        <div>
            select Watches
        </div>
    );
};

export default Watches;