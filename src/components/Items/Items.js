import React from 'react';

const Items = (props) => {
    const {name,img}=props.product
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Items;