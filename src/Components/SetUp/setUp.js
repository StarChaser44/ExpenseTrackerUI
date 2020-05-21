import React from 'react';
import './setUp.css';

const Setup = () => {
    return(
        <div>
            <div className="Setup">
                <h3>set your budget for the month!</h3>
            </div>
            <div>
                <form className="set-form">
                    <div className="">
                        <p>Enter Total Budget</p>
                        <input type="text"/>
                    </div>
                    <div className="">
                        <p>Enter This Months Budget</p>
                        <input type="text"/>
                    </div>
                    <button id="continue">continue</button>
                </form>
            </div>
        </div>
    )
}

export default Setup;