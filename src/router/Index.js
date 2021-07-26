import React from 'react';
import { DailyMain, Login, Trash } from '../pages';
import { BrowserRouter, Route } from 'react-router-dom';

function Index() {
    return (
        <div>
            <BrowserRouter>
                {/* <Login /> */}
                <DailyMain />
                <Route path='/trash' component={Trash} />
            </BrowserRouter>
        </div>
    )
}

export default Index
