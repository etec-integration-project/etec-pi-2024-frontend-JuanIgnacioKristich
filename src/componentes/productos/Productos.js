import { useContext } from "react";
import { dataContext } from "../context/DataContext";


const Productos = () => {
    const { data } = useContext(dataContext); 
    return data.map((Productos)=> {
        return(
            <div className="card" > 
                <img src={Productos.img} alt="img-producto-card" />
                <h3> {Productos.name} </h3>
                <h4> {Productos.price}$ </h4>
                <button>buy</button>
            </div>
            
        );
    });
  
};

export default Productos