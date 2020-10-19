import React, { useEffect, useState } from "react";
import Home from '../../assets/svg/Home.svg';

const menuItems = [
  {
    "url": '/dashboard',
    "icon": <Home />,
    "tag":"menu0"
  },
  {
    "name": "Client managment",
    "subTitle": "Requests, Deployed, Finished, Sta...",
    "url": "/",
    "tag":"menu1",
    "children": [
      {
        "name": "Requests",
        "url": "/requests"
      },
      {
        "name": "Deployed",
        "url": "/deployed"
      },
      {
        "name": "Finished",
        "url": "/finished"
      },
      {
        "name": "Statistics",
        "url": "/stats"
      }
    ]
  },
  {
    "name": "Administrator managment",
    "subTitle": "Create user, Delete user, Edit user, Update user",
    "url": "/admin-management",
    "tag":"menu2",
    "children": [
      {
        "name": "Manage Administrators",
        "url": "/manage-admins"
      }
    ]
  },
  {
    "name": "Customer Support",
    "subTitle": "Call customer, Email customer, Re...",
    "url": "/customer-support",
    "tag":"menu3",
    "children": []
  }
]

export default menuItems;
