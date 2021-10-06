import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css';


const FooterSecret = () => {
    return (
        <div id={classes.footer}>
            <ul>
                <li><NavLink to='/'>main</NavLink></li>
                <li><NavLink to='/best'>best</NavLink></li>
                <li><NavLink to='/profile'>profile</NavLink></li>
                <li><NavLink to='/share'>share</NavLink></li>
            </ul>
            <div>
                <img src='https://podslyshano.com/images/logo.svg' alt='not found'/>
            </div>
            <ul>
                <li><a href={'https://vk.com/racoonister'}>facebook</a></li>
                <li><a href={'https://vk.com/racoonister'}>twitter</a></li>
                <li><a href={'https://vk.com/racoonister'}>telegram</a></li>
                <li><a href={'https://vk.com/racoonister'}>vk</a></li>
            </ul>
        </div>
    );
}
export const Footer = React.memo(FooterSecret)