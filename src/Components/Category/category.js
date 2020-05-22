import React from 'react';
import './category.css';

const Category = (props) => {
    return (
        <div>
            <img src={props.image} alt="Some Image lol" />
            <p>{props.category}</p>
            <span>{props.price}</span>
        </div>
    )
}

export default Category;