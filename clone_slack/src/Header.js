import React from 'react';
import './Header.css';
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";

function Header () {
    return <div className = "header">
            <div className = "header__left">
            <Avatar
                className="header__avatar"
                alt='Rafeh Qazi'
                src=''
            />
            <AccessTimeIcon/>
            </div>
            <div className = "header__search">
                <SearchIcon/>
                {/* input */}
            </div>
            <div className ="header__right">
                {/* help icon */}
            </div>
        </div>;
    
}
export default Header;