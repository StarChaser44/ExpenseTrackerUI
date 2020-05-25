import React, { useState, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import FireBaseApp from '../../utils/Firebase';
import { AuthContext } from '../../Auth';
//these are all the images that we are importing
import Category from '../Category/category'
import groceries from '../../Images/groceries.png';
import entertainment from '../../Images/entertainment.png';
import transportation from '../../Images/transportation.png';
import clothes from '../../Images/clothes.png';
import other from '../../Images/other.png';
import logout from '../../Images/logout.png';
import './DashboardStyle.css';
import DashboardUI from './DashboardUI'

const Dashboard = (props) => {
    const [category, setCategory] = useState('');
    const [addToBudget, setAddToBudget] = useState('');
    const [removeFromBudget, setRemoveFromBudget] = useState('');
    const [loading, setLoading] = useState(true);
    const { currentUser } = useContext(AuthContext);
    const [renderTest, setRenderTest] = useState(false);
    const handleLogout = async () => {
        try{
            await FireBaseApp.firebase.auth().signOut();
            console.log("signed out successfully");
            props.history.push('/login');
        } catch(e) {
            console.log(e);
        }
    };

    if(renderTest) return <DashboardUI user={currentUser} />

    return (
       <div>
           {
               currentUser === null ? "loading..." : setRenderTest(true)
           }
       </div>
    )
}

export default withRouter(Dashboard);