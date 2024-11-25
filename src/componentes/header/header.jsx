import './header.css';
import acount_circle from '../../multimedia/account_circle.png';
import cart from '../../multimedia/shopping_cart.png';
import logo from '../../multimedia/KR-store-logo.png';
import upload from '../../multimedia/cloud_upload_FILL0_wght400_GRAD0_opsz24.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user token exists in local storage to determine login status
        const token = localStorage.getItem('userToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // Remove user token from local storage and update state
        localStorage.removeItem('userToken');
        setIsLoggedIn(false);
        window.location.reload();
    };

    return (
        <header>
            <nav>
                <h1>
                    <Link to="/">
                        <img className="logo_kr" src={logo} alt="APP LOGO" />
                    </Link>
                </h1>
                <ul className="nav_list">
                    <li className="nav_link">
                        <input type="text" placeholder="Search ..." id="filled-basic" />
                        <span id="pred_labels"></span>
                    </li>
                    {!isLoggedIn ? (
                        <li className="nav_link">
                            <Link to="/login">
                                <img src={acount_circle} alt="" />
                            </Link>
                        </li>
                    ) : (
                        <li className="nav_link">
                            <button onClick={handleLogout} className="logout-button">
                                Cerrar sesión
                            </button>
                        </li>
                    )}
                    <li className="nav_link">
                        <Link to="/Cart">
                            <img src={cart} alt="" />
                        </Link>
                    </li>
                    <li className="nav_link" id='upload'>
                        <Link to="/ShowProducts">
                            <img src={upload} alt="" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
