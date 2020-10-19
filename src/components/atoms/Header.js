import React, { Component } from 'react';
import './index.css';

// components 
import Logo from '../../assets/svg/Logo.svg';
import User from '../../assets/svg/User.svg';
import Help from '../../assets/svg/Help.svg';



const Header = ({ }) => (
    <div className='header'>
        <Logo />
        <div style={{ display: 'inline', float: 'right' }}>
            <User style={{margin:'5px'}}/>
            <Help style={{margin:'5px'}}/>
        </div>
    </div>
)

export default Header;