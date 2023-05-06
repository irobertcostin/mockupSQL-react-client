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

            }

        } catch (error) {
            message.error(error, [3], console.log(error))
        }
    }





}