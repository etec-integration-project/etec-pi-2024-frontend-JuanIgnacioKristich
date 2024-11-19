import { createContext, useState, useEffect } from "react";
import BACKEND from "../../config";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({children}) => {

    const [data, setData] = useState ([]);
    const [cart, setCart] = useState ([]);

    useEffect (()=> {  

        axios.get(`${BACKEND}/products`).then((res)=> setData(res.data))

    }, [])

    return(
        <dataContext.Provider value={{data, cart, setCart}} > {children} </dataContext.Provider>
    )

}

export default DataProvider;

