import React from 'react';
import Category from '../Category/category'
import groceries from '../../Images/groceries.png';
import entertainment from '../../Images/entertainment.png';
import transportation from '../../Images/transportation.png';
import clothes from '../../Images/clothes.png';
import other from '../../Images/other.png';
const Dashboard = () => {
    return (
        <div>
            <h1>Welcome GODWIN!</h1>
            <div>
                <p>Total Income</p>
                <p>$2,350.57</p>
                <p>click to set monthly income</p>
            </div>
            <div>
                ADD AND REMOVE INCOME SECTION
            </div>
            <div>
                EXPENSES SECTION
            </div>
            <div>
                <p>Categories</p>
                <div>
                    <ul>
                        <li><Category image={groceries} category="Groceries" price="$240.79" /></li>
                        <li><Category image={entertainment} category="Entertainment" price="$71.29" /></li>
                        <li><Category image={transportation} category="Transportation" price="$25.00" /></li>
                        <li><Category image={clothes} category="Clothes &amp; Shoes" price="$0" /></li>
                        <li><Category image={other} category="Other" price="$0" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;