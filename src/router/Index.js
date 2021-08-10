import React from 'react';
import {
    Login,
    DailyMain,
    MonthlyMain,
    YearlyMain,
    Home,
    Profile,
} from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Index() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/daily' component={DailyMain} />
                    <Route exact path='/monthly' component={MonthlyMain} />
                    <Route exact path='/yearly' component={YearlyMain} />
                </Switch>
            </Router>
        </>
    )
}

export default Index
