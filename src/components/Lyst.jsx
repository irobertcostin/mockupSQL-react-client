import { Space, Table, Tag } from 'antd';
import { Context } from '../context/Context';
import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';



export default function Lyst({ setSelectedCar }) {

    let [data, setData] = useContext(Context);


    let navigate = useNavigate();


    let setCar = (element) => {

        let x = data.filter(e => e.id == element.target.value);
        setSelectedCar(x[0]);
        goEdit(element.target.value)
    }


    let deleteCar = (element) => {

        // let x = data.filter(e => e.id == element.target.value);

    }


    let goEdit = (id) => {
        navigate(`/edit-car/${id}`)
    }


    useEffect(() => {

    }, [data])


    return (
        <>
            <Header />
            <div className="flex flex-col">

                <p className='w-full text-center mb-8 text-3xl font-extrabold text-slate-600'>allCars</p>

                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="">
                            <table className="min-w-full text-center text-sm font-light">

                                <thead
                                    className="border-b bg-cyan-700 font-medium text-white dark:border-neutral-500 ">
                                    <tr>
                                        <th scope="col" className=" px-6 py-4">#</th>
                                        <th scope="col" className=" px-6 py-4">Maker</th>
                                        <th scope="col" className=" px-6 py-4">Model</th>
                                        <th scope="col" className=" px-6 py-4">Registration</th>
                                        <th scope="col" className=" px-6 py-4">Mileage</th>
                                        <th scope="col" className=" px-6 py-4">Price</th>
                                    </tr>
                                </thead>

                                <tbody className=''>

                                    {
                                        data.length > 0 &&
                                        data.map(element =>

                                            <tr
                                                key={element.id} className=" dark:border-neutral-500   ease-in-out duration-300">
                                                {/* <td className="whitespace-nowrap  px-6 py-4 font-medium">{element.id}</td> */}
                                                <td>
                                                    <div
                                                        className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 "
                                                        role="group">
                                                        <button
                                                            onClick={setCar}
                                                            value={element.id}
                                                            type="button"
                                                            className="inline-block rounded-l bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-blue-900 hover:bg-blue-700 transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 "
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light">
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={deleteCar}
                                                            value={element.id}
                                                            type="button"
                                                            className="inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-blue-900 hover:bg-blue-700 transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0"
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">{element.maker}</td>
                                                <td className="whitespace-nowrap  px-6 py-4">{element.model}</td>
                                                <td className="whitespace-nowrap  px-6 py-4">{element.year}</td>
                                                <td className="whitespace-nowrap  px-6 py-4">{element.mileage}</td>
                                                <td className="whitespace-nowrap  px-6 py-4">{element.price}</td>
                                            </tr>

                                        )
                                    }



                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}