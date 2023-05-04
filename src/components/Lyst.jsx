import { Space, Table, Tag } from 'antd';
import { Context } from '../context/Context';
import React,{useState,useEffect,useContext} from 'react';


export default function Lyst() {

    let [data,setData]=useContext(Context);
    



    // const data = [
    //     'Racing car sprays burning fuel into crowd.',
    //     'Japanese princess to wed commoner.',
    //     'Australian walks 100km after outback crash.',
    //     'Man charged over missing wedding girl.',
    //     'Los Angeles battles huge wildfires.',
    // ];


useEffect(() => {
    console.log(data);
}, [data])




    return (
        <>
           
        </>
    )
}