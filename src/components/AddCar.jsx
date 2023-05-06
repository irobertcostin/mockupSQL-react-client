import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import { Context } from '../context/Context';
import React, { useState, useEffect, useContext } from 'react';


export default function AddCar() {

    let [data, setData] = useContext(Context);


    useEffect(() => {

    }, [])


    return (
        <>
            <Header />
            <p className='w-full text-center mb-8 text-3xl font-extrabold text-slate-600'>addCar</p>

        </>
    )
}