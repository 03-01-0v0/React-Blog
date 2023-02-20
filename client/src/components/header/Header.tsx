import React from 'react';
import './Header.scss';
import avatar from '../../assets/images/avatar_react.jpg';
import {Link} from 'react-router-dom';
export default function Header() {
    const user = false;
    return (
        <header className='header'>
            <div className='headerLeft'>
                <Link to='/' className='logo'>
                    MyBog
                </Link>
            </div>
            <div className='headerCenter'>
                <ul className='list'>
                    <li className='listItem'>
                        <Link className='link' to='/'>
                            HOME
                        </Link>
                    </li>
                    <li className='listItem'>ABOUT</li>
                    <li className='listItem'>CONTACT</li>
                    <li className='listItem'>
                        <Link className='link' to='/write'>
                            WRITE
                        </Link>
                    </li>
                    {user && <li className='listItem'>LOGOUT</li>}
                </ul>
            </div>
            <div className='headerRight'>
                <i className='searchIcon fas fa-search'></i>
                {user ? (
                    <Link className='link' to='/settings'>
                        <img className='headerImg' src={avatar} alt='avatar' />
                    </Link>
                ) : (
                    <ul className='list'>
                        <li className='listItem'>
                            <Link className='link' to='/login'>
                                LOGIN
                            </Link>
                        </li>
                        <li className='listItem'>
                            <Link className='link' to='/register'>
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
}
