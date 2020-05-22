import React, { useState } from 'react';
import Category from '../Category/category'
import groceries from '../../Images/groceries.png';
import entertainment from '../../Images/entertainment.png';
import transportation from '../../Images/transportation.png';
import clothes from '../../Images/clothes.png';
import other from '../../Images/other.png';
import './DashboardStyle.css'
const Dashboard = () => {
    const [category, setCategory] = useState('');
    const [addToBudget, setAddToBudget] = useState('');
    const [removeFromBudget, setRemoveFromBudget] = useState('');

    return (
        <div>
            <div className="budgetSetterContainer">
                <div id="addBudget">
                    <p>Add to budget</p>
                    {/* This is just a spacer for the add to budget and input field */}
                    <div style={{margin: '5px'}}></div> 
                    <p className="inputBox">$</p>
                    <input className="inputField" type='text' onChange= {(e) => setAddToBudget(e.target.value)}/>
                </div>
                <div id="removeBudget">
                    <p>Remove from budget</p>
                    {/* This is just a spacer for the remove from budget and input field */}
                    <div style={{margin: '5px'}}></div>
                    <p className="inputBox">$</p>
                    <input className="inputField" type='text' onChange= {(e) => setRemoveFromBudget(e.target.value)} />
                </div>
            </div>
                <div className="Category">
                    <select name="categories" onChange={(e) => setCategory(e.target.value)}>
                        <option value="Categories" selected="selected">Categories</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Clothes &amp; Shoes">Clothes &amp; Shoes</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
        
            <div className="expensesContainer">

                <div className="expenses">
                    <p id="expensesAmount">$-337.08</p>
                    <p id="expensesText">Expenses</p>
                </div>
                <hr className=".vl"></hr>

                <div className="limit_remaining">

                    <div className="monthlyLimit">
                        <p id="monthlyLimitAmount">$500</p>
                        <p id="monthlyLimitText">Monthly Limit</p>
                    </div>

                    <div className="remainingBalance">
                        <p id="remainingBalanceAmount">$163</p>
                        <p id="remainingAmountText">Remaining</p>
                    </div>
                </div>

            </div>
            <div>
                <h2 id="categoryHeader">Categories</h2>
                <div className="categoriesContainer">
                    <ul className="categoryList">
                        <li className="CategoryItem"><Category image={groceries} category="Groceries" price="$240.79" /></li>
                        <li className="CategoryItem"><Category image={entertainment} category="Entertainment" price="$71.29" /></li>
                        <li className="CategoryItem"><Category image={transportation} category="Transportation" price="$25.00" /></li>
                        <li className="CategoryItem"><Category image={clothes} category="Clothes &amp; Shoes" price="$0" /></li>
                        <li className="CategoryItem"><Category image={other} category="Other" price="$0" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;