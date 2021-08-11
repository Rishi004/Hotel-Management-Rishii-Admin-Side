import React from 'react';
import './DailyTotal.css';
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

function DailyTotal() {
    return (
        <div className="daily-total-div">
            <div className="daily-total-paper-income">
                <h3>Total Income</h3>
                <br />
                <IoIcons.IoMdStats style={{ fontSize: 70, color: 'white' }} />
                <h4 className='price'>Rs <br />400 000</h4>
            </div>
            <div className="daily-total-paper-expense">
                <h3>Total Expenses</h3>
                <br />
                <BiIcons.BiLineChartDown style={{ fontSize: 70, color: 'white' }} />
                <h4 className='price'>Rs <br />150 000</h4>
            </div>
            <div className="daily-total-paper-profit">
                <h3>Profit</h3>
                <br />
                <AiIcons.AiOutlineLineChart style={{ fontSize: 70, color: 'white' }} />
                <h4 className='price'>Rs <br />250 000</h4>
            </div>
        </div>
    )
}

export default DailyTotal
