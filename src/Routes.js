
import React, { useEffect } from "react";
import { BrowserRouter, HashRouter, Router, Route, Redirect, Switch } from "react-router-dom";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard";
import ClientRequests from "./views/ClientRequests";
import { connect } from "react-redux";
import Layout from './components/layouts/Layout';



function mapStateToProps(state) {
    const isAuthenticated = state.user.isAuthenticated;


    return {
        isAuthenticated
    };
}


function mapDispatchToProps(dispatch) {
    return {
       
    };
}


function Routes(props) {
    const { isAuthenticated } = props

    return (
        <BrowserRouter>
            {
                !isAuthenticated ?
                    <Route path="/" exact component={Login} />
                    :
                    <Route render={(props) => (
                        <Layout {...props} >
                            <Switch>
                                <Route path="/" exact component={Dashboard} />
                                <Route path="/dashboard" exact component={Dashboard} />
                                <Route path="/requests" component={ClientRequests} />
                                <Route path="/deployed" component={Login} />
                                <Route component={NotFound} />
                            </Switch>
                        </Layout>
                    )} />
            }
        </BrowserRouter>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);