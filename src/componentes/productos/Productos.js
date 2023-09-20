import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import './Productos.css';


export const Productos = () => {
    const { data, cart, setCart } = useContext(dataContext); 

    const buyProducts = (Productos) => {
        console.log(Productos);
        setCart([...cart, Productos])
    } 


    return data.map((Productos)=> {
        return(
            <div className="card" key="product.id" > 
                <img src={Productos.img} alt="img-producto-card" />
                <h3 className="Producto-estilo"> {Productos.name} </h3>
                <h4 className="Producto-estilo"> {Productos.price}$ </h4>
                <button onClick={()=>buyProducts(Productos)} >Buy</button>
            </div>
            
        );
    });
  
};

export default Productos