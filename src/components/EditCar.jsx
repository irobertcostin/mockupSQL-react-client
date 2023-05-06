import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import { Context } from '../context/Context';
import React, { useState, useEffect, useContext } from 'react';
import { DatePicker, Button, Form, Input, InputNumber, message } from 'antd';
import Data from "../services/Api";

export default function EditCar() {

    let [data, setData] = useContext(Context);

    let [editCar, setEditCar] = useState();

    let id = useParams().id;



    let [brand, setMaker] = useState('');
    let [model, setModel] = useState('');
    let [year, setYear] = useState('');
    let [price, setPrice] = useState('');
    let [mileage, setMileage] = useState('');


    let onChangeMaker = (element) => {
        let obj = element.target.value;
        // console.log(obj);
        setMaker(obj);
    }

    let onChangeModel = (element) => {
        let obj = element.target.value;
        // console.log(obj);
        setModel(obj);
    }

    let onChangePrice = (element) => {
        setPrice(element)
        // console.log(element);
    };

    let onChangeMileage = (element) => {
        // console.log(element)
        setMileage(element)
    };

    let onChangeYear = (element) => {
        setYear(element.$y + "-" + (element.$M + 1) + "-" + element.$D)
    };



    let api = new Data();


    let newCar = async () => {

        let newC = {
            id: +id,
            maker: brand,
            model: model,
            year: year,
            price: price,
            mileage: mileage
        }

        await api.editCar(newC, id)

        let x = data.filter(e => e.id != id);

        x.push(newC);

        console.log(x);
        setData(x);
    }










    let retrieveCar = (id) => {
        let x = data.filter(e => e.id == id)
        setEditCar(x[0]);
    }


    useEffect(() => {
        retrieveCar(id)
    }, [data])


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

                    <div>
                        <Form className=" add-form flex flex-col  px-12 py-12  w-auto rounded-lg"
                            labelCol={{
                                span: 0,
                            }}
                            wrapperCol={{
                                span: 50,

                            }}
                            layout="horizontal"
                            initialValues={{
                                // size: componentSize,
                            }}
                            // onValuesChange={onFormLayoutChange}
                            // size={componentSize}
                            label=""

                        >



                            <Form.Item className=" flex ">
                                <Input className="border-1 border-gray-300 rounded-lg " onChange={onChangeMaker} style={{ width: '200px' }} placeholder="Maker" />
                            </Form.Item>

                            <Form.Item className=" flex ">
                                <Input className="border-1 border-gray-300 rounded-lg " onChange={onChangeModel} style={{ width: '200px' }} placeholder="Model" />
                            </Form.Item>


                            <div className=" flex items-center mb-6">
                                <label className="mr-12 hidden">Mileage</label>
                                <InputNumber prefix="km" onChange={onChangeMileage} style={{ width: '200px' }} />
                            </div>



                            <div className=" flex items-center mb-6">
                                <label className="mr-16 hidden">Price</label>
                                <InputNumber
                                    defaultValue={1000}
                                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                    onChange={onChangePrice}
                                    style={{ width: '200px' }}
                                />
                            </div>

                            <div className=" flex items-center mb-6">
                                <label className="mr-12 hidden">Registration</label>
                                <DatePicker style={{ width: '200px' }} onChange={onChangeYear} picker="day" placeholder="Registration date" bordered={true} />
                            </div>



                            <div className="flex md:w-[00px]  flex-row gap-4 items-center justify-center mt-2 mr-4">
                                <Button type="primary" onClick={newCar} className="bg-blue-600 text-shadow-glow hover:scale-110">Submit</Button>
                                <Button type="primary" danger className="bg-blue-600 text-shadow-glow hover:scale-110">Delete</Button>
                                <Button type="primary" className=" text-shadow-glow hover:scale-110" danger>Cancel</Button>
                            </div>





                        </Form>
                    </div>
                </div>
            }
        </>
    )
}