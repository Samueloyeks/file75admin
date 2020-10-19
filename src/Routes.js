
import React from "react";
import { BrowserRouter, Router, Route, Redirect, Switch } from "react-router-dom";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard";
import ClientRequests from "./views/ClientRequests";
import { connect } from "react-redux";
import Layout from './components/layouts/Layout';


function mapStateToProps(state) {
    const loading = state.user.loading;
    const isAuthenticated = state.user.isAuthenticated;


    return {
        loading,
        isAuthenticated
    };
}


function mapDispatchToProps(dispatch) {
    return {
        login: (data) => dispatch(userActions.login(data)),
    };
}


function Routes(props) {
    const { isAuthenticated } = props
    console.log(isAuthenticated)

    return (
        <BrowserRouter>
            {
                !isAuthenticated ?
                    <Route path="/" exact component={Login} />
                    :
                    <Route render={(props) => (
                        <Layout {...props}>
                            <Switch>
                                <Route path="/" exact component={Dashboard} />
                                <Route path="/dashboard" exact component={Dashboard} />
                                <Route path="/requests" component={ClientRequests} />
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