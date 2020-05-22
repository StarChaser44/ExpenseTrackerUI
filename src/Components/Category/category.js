import React from 'react';
import './category.css';

const Category = (props) => {
    return (
        <div className="categoryContainer">
            <div className="imgContainer">
                <img className="images" src={props.image} alt="Some Image lol" />
            </div>
            <p className="categoryName">{props.category}</p>
            <p className="categoryAmount">{props.price}</p>
        </div>
    )
}

export default Category;