import './body.css';
import React from 'react'
import iphone1 from "../../multimedia/iphone14logo.png";
import gadget from "../../multimedia/auricular.png";
import {Link} from 'react-router-dom';

export default function Body() {
  return <>
            {/* <div class="card" style="width: 80%;">
                    <img src="/Multimedia/starhub-store-iphone-14-pro-max-gold-front.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="celulares.html" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card" style="width: 80%;">
                    <img src="Multimedia/auricular.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="gagets prueba.html" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                --> */}

            <main>
                <div class="Producto">
                    <Link to="/cat_cel"> <img src={iphone1} alt="" class="producto-logo"/> </Link>
                </div>
                                    
                <div class="Producto">
                    <Link to="/cat_gadget"><img src={gadget} alt="" class="producto-logo"/> </Link>
                </div>

            </main>
    </>
}