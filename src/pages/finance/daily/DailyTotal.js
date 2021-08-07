import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import './DailyTotal.css';

function DailyTotal() {
    return (
        <div className="daily-total-div">
            <div className="daily-total-paper">
                <h4>Total Income</h4>
            </div>
            <div className="daily-total-paper">
                <h4>Total Expenses</h4>
            </div>
            <div className="daily-total-paper">
                <h4>Profit</h4>
            </div>
        </div>
    )
}

export default DailyTotal
