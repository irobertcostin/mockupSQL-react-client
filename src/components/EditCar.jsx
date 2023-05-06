import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import { Context } from '../context/Context';
import React, { useState, useEffect, useContext } from 'react';


export default function EditCar() {

    let [data, setData] = useContext(Context);

    let [editCar, setEditCar] = useState();

    let id = useParams().id;



    let retrieveCar = () => {
        let x = data.filter(e => e.id == id)
        setEditCar(x[0]);
    }


    useEffect(() => {
        retrieveCar()
    }, [])


    return (
        <>
            {
                editCar &&
                <div>
                    <Header />
                    <p className='w-full text-center mb-8 text-3xl font-extrabold text-slate-600'>editCar</p>

                    <div className="p-4 border-2 border-fuchsia-500">
                        <p>Car id: {id}</p>
                        <p>Car Maker: {editCar.maker}</p>
                        <p>Car Model: {editCar.model}</p>
                        <p>Car Reg: {editCar.year}</p>
                        <p>Car Mileage: {editCar.mileage}</p>
                        <p>Car Price: ${editCar.price}</p>

                    </div>
                </div>
            }
        </>
    )
}