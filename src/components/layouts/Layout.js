import React from 'react';
import Sidebar from "./Sidebar";
import Nav from "../atoms/Nav";
import Header from "../atoms/Header";


function Layout(props) {
    return (
        <div>
            <Header {...props} />
            <div style={{ display: "flex" }}>
                <Sidebar history={props.history} />
                <div style={{
                    //  width: '100%',
                    flex: 1
                }}>
                    {/* <Nav /> */}
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;