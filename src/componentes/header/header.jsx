import './header.css';
import acount_circle from '../../multimedia/account_circle.png'
import cart from "../../multimedia/shopping_cart.png"
import logo from "../../multimedia/KR-store-logo.png"
import upload from '../../multimedia/cloud_upload_FILL0_wght400_GRAD0_opsz24.png'
import { Link } from 'react-router-dom';
import { setup } from "./integracion/search";

export default function Header() {
    return (

        <header>
            <nav>
                <h1>
                    <Link to="/"><img class="logo_kr" src={logo} alt="APP LOGO" /></Link>
                </h1>
                <ul class="nav_list">
                    <li class="nav_link">
                        <input type="text" placeholder="Search ..." id="filled-basic" />
                        <span id="pred_labels"></span>
                    </li>
                    <li class="nav_link"><Link to="/login"><img src={acount_circle} alt="" /></Link></li>
                    <li class="nav_link"><Link to="/Cart"><img src={cart} alt="" /></Link></li>
                    <li class="nav_link" id='upload' ><Link to="/ShowProducts" ><img src={upload} alt="" /></Link> </li>
                </ul>
            </nav>
        </header>
    )
}