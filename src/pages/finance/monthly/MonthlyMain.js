import React from 'react';
import { Navbar } from '../../../components/items';
import {MonthlyTable} from '../../../pages';

function MonthlyMain() {
    return (
        <div>
            <Navbar />
            <MonthlyTable />
        </div>
    )
}

export default MonthlyMain
