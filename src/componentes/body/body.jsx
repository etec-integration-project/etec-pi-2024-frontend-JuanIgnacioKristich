import './body.css';
import React from 'react';
import iphone1 from "../../multimedia/iphone14logo.png";
import gadget from "../../multimedia/auricular.png";
import { Link } from 'react-router-dom';

export default function Body() {
  return (
    <>
      <main>
        <ul>
          <div className="Producto">
            <Link to="/Cat_cel">
              <img src={iphone1} alt="iPhone 14" className="producto-logo" />
            </Link>
          </div>
        </ul>

        <ul>
          <div className="Producto">
            <Link to="/Cat_gadget">
              <img src={gadget} alt="Gadget" className="producto-logo" />
            </Link>
          </div>
        </ul>               
      </main>
    </>
  );
}
