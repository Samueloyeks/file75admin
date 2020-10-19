import React, { useEffect, useState } from "react";
import Home from '../../assets/svg/Home.svg';

const SidebarItems = [
    {
        // name: "THE ITALIAN JOB",
        route: '/',
        icon: <Home />
    },
    {
        name: "Client managment",
        subTitle: "Requests, Deployed, Finished, Sta...",
        route: '/dashboard',
        children: [
            {
                name: "Requests",
                route: "/"
            },
            {
                name: "Deployed",
                route: "/" 
            },
            {
                name: "Finished",
                route: "/login"
            },
            {
                name: "Statistics",
                route: "/"
            },
        ]
    },
    {
        name: "Administrator managment",
        subTitle: "Create user, Delete user, Edit user, Update user",
        route: '/login'
    },
    {
        name: "Customer Support",
        subTitle: "Call customer, Email customer, Re...",
        route: '/'
    }
];

export default SidebarItems;