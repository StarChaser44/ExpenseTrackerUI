import React, { useState } from 'react';
import { withRouter } from 'react-router';
import FireBaseApp from '../../utils/Firebase';
//these are all the images that we are importing
import Category from '../Category/category'
import groceries from '../../Images/groceries.png';
import entertainment from '../../Images/entertainment.png';
import transportation from '../../Images/transportation.png';
import clothes from '../../Images/clothes.png';
import other from '../../Images/other.png';
import logout from '../../Images/logout.png';
import './DashboardStyle.css';

const DashboardUI = (props) => {
    const [category, setCategory] = useState('');
    const [addToBudget, setAddToBudget] = useState('');
    const [removeFromBudget, setRemoveFromBudget] = useState('');
    const handleLogout = async () => {
        try{
            await FireBaseApp.firebase.auth().signOut();
            console.log("signed out successfully");
            props.history.push('/login');
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div className="logout">
                <div onClick={handleLogout}>
                    <img src={logout} alt="logout button" />
                    <p>Logout</p>
                </div>
            </div>
            <h3 className="dash-name">welcome <span>{"user112"}</span>!</h3>
            <div className="totalBudget">
                <div>
                    <p className="total">Total Income</p>
                    <p>Click to change budget</p>
                </div>
                <p className="money">$2,350.57</p>
            </div>
            <div className="dashboard-content">
                <div className="addAndRemove">
                    <div></div>
                </div>
                <div className="expense-section">
                    <div className="leftSide">
                        <span>$-337.08</span>
                        <p>Expenses</p>
                    </div>
                    <div className="line"></div>
                    <div className="rightSide">
                        <div className="month-limit">
                            <span>$500</span>
                            <p>Monthly Limit</p>
                        </div>
                        <div className="remaining">
                            <span>$163</span>
                            <p>Remaining</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="categories">
                        <p className="category-title">Categories</p>
                        <ul>
                            <li>
                                <Category image={groceries} category="Groceries" price="$240.79" />
                                <p className="hidden">
                                    This includes things like groceries and fastfood!
                                </p>
                            </li>
                            <li>
                                <Category image={entertainment} category="Entertainment" price="$71.29" />
                                <p className="hidden">
                                    This includes movies, Netflix, all the expenses you watch!
                                </p>
                            </li>
                            <li>
                                <Category image={transportation} category="Transportation" price="$25.00" />
                                <p className="hidden">
                                    This includes gas, 
                                </p>
                            </li>
                            <li>
                                <Category image={clothes} category="Clothes" price="$0" />
                                <p className="hidden">
                                    This includes shoes, clothes, all the designer you buy!
                                </p>
                            </li>
                            <li>
                                <Category image={other} category="Other" price="$0" />
                                <p className="hidden">
                                    This includes 
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(DashboardUI);