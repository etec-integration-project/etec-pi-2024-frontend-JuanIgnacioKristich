import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
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
                <h3> {Productos.name} </h3>
                <h4> {Productos.price}$ </h4>
                <button onClick={()=>buyProducts(Productos)} >buy</button>
            </div>
            
        );
    });
  
};

export default Productos