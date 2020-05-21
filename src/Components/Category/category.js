import React from 'react';

const Category = (props) => {
    return (
        <div>
            <img src={props.image} alt="Some Image lol" />
            <p>{props.category}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default Category;