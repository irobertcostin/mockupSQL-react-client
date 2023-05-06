import { createContext, useState } from "react";
import Data from "../services/Api";




export const Context = createContext();



export const CarsProvider = ({ children }) => {


    const [data, setData] = useState([]);


    if (data.length == 0) {
        let api = new Data();


        api.getMasini().then(response => {
            setData(response);

        })
    }


    return (
        <Context.Provider value={[data, setData]}>{children}</Context.Provider>
    )


}