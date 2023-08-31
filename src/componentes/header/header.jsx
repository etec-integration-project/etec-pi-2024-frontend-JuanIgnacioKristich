import './header.css';
import acount_circle from '../../multimedia/account_circle.png'
import cart from "../../multimedia/shopping_cart.png"
import logo from "../../multimedia/KR-store-logo.png"
import { Link } from 'react-router-dom';
export default function Header(){
    return(

        // <header>
        //     <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        //         <div class="container-fluid">
        //             <a class="navbar-brand" href="Index.html"><img src="./Multimedia/KR store logo.png" alt="" style="max-width: 15%;" /></a>
        //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li class="nav-item">
        //                         <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">Link</a>
        //                     </li>
        //                     <li class="nav-item dropdown">
        //                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown
        //                         </a>
        //                         <ul class="dropdown-menu">
        //                         <li><a class="dropdown-item" href="#">Action</a></li>
        //                         <li><a class="dropdown-item" href="#">Another action</a></li>
        //                         <li><hr class="dropdown-divider" /></li>
        //                         <li><a class="dropdown-item" href="#">Something else here</a></li>
        //                         </ul>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link disabled">Disabled</a>
        //                     </li>
        //                 </ul>
        //                 <form class="d-flex" role="search">
        //                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                     <button class="btn btn-outline-success" type="submit">Search</button>
        //                 </form>
        //             </div>
        //         </div>
        //     </nav>
        <header>
            <nav>
                <h1>
                    <Link to="/"><img class="logo_kr" src={logo} alt="APP LOGO"/></Link>
                </h1>
                <ul class="nav_list">
                    <li class="nav_link"><a href="#"><img src={""} alt=""/></a></li> 
                    <li class="nav_link"><a href="#"><img src={acount_circle} alt=""/></a></li>
                    <li class="nav_link"><a href="#"><img src={cart} alt=""/></a></li>
                </ul>
            </nav> 
        </header>
    )
}