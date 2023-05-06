import React from "react";
import { message } from "antd";


export default class Data {

    api(path, method = "GET", body = null) {

        const url = "http://localhost:3456" + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
        if (body != null) {
            options.body = JSON.stringify(body);
        }
        return fetch(url, options)
    }


    async getMasini() {
        try {
            let data = await this.api('/masini')

            if (data.status === 200) {
                let resp = await data.json();
                return resp;
            } else {
                let resp = await data.json();

                message.error(resp.error.message, [3], console.log(""))
            }

        } catch (error) {
            message.error(error, [3], console.log(error))
        }
    }



    async editCar(car, id) {
        try {

            let data = await this.api(`/edit/id=${id}`, "PUT", car);

            if (data.status === 202) {
                let resp = await data.json();

                message.success(resp, [3], console.log(""))
                return resp;
            } else {
                let resp = await data.json();

                message.error(resp.error.message, [3], console.log(""))
            }



        } catch (error) {
            message.error(error, [3], console.log(error))
        }
    }





}