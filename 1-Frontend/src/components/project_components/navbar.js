import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function () {
    return (
        <div className='navbar-wrapper'>
            <div className='navlink-wrapper'>
                <NavLink exact to="/" className="link" activeClassName="active-link"><FontAwesomeIcon icon="home"/> Home</NavLink>
                <NavLink exact to="/whats-this" className="link" activeClassName="active-link"><FontAwesomeIcon icon='circle-info'/> What's this?</NavLink>
                <NavLink exact to="/create" className="link" activeClassName="active-link"><FontAwesomeIcon icon='magic-wand-sparkles'/> Create</NavLink>
                <NavLink exact to="/users/:slug" className="link" activeClassName="active-link"><FontAwesomeIcon icon='id-card'/> Profile</NavLink>
            </div>

            <div className='search-wrapper'>
                <div className='search-field'>
                    <input
                        type='text'
                        placeholder='Search generators'
                    >
                    </input>
                    <button><FontAwesomeIcon icon="magnifying-glass"/> Search</button>
                </div>
            </div>

            <div className='auth-wrapper'>
                <button><NavLink exact to="/signup" className="link"><FontAwesomeIcon icon="map"/> Sign up </NavLink></button>
                <button><NavLink exact to="/login" className="link"><FontAwesomeIcon icon="circle-user"/> Log in </NavLink></button>
            </div>
        </div>
    );
}

/* TODO: Put a route guard to access the Create page only when logged in */