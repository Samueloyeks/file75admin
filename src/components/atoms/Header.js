import React, { useState, useEffect } from 'react';
import './index.css';
import UserAvatar from 'react-user-avatar';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';
import { useHistory } from "react-router-dom";




// components 
import Logo from '../../assets/svg/Logo.svg';
import Help from '../../assets/svg/Help.svg';


function mapStateToProps(state) {
    const userData = state.user.userData;

    return {
        userData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(userActions.logout()),
    };
}



const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    let history = useHistory();


    const handleLogout = () => {
        history.push("/");
        props.logout();
    }

    return (
        <div className='header'>
            <Logo />
            <div style={{ display: 'inline', float: 'right' }}>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} className='avatar-dropdown'>
                    <DropdownToggle>
                        <UserAvatar
                            className='user-avatar'
                            size="28"
                            name={props.userData.fullName}
                        />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem header>{props.userData.fullName}</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => handleLogout()}>Log out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Help style={{ margin: '5px' }} />
            </div>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);