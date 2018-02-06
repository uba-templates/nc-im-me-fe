import axios from "axios";
import request from "utils/ajax";

const URL = {
    "GET_USER": "/api/user",
    "ADD_USER": "/api/adduser",
    "EDIT_USER": "/api/edituser",
    "DELETE_USER": "/api/delete"
}

export const get = () => {
    return request(URL.GET_USER, {
        method: "get"
    });
}

export const add = (user) => {
    return request(URL.ADD_USER, {
        method: "post",
        data: user
    });
}

export const edit = (user) => {
    return request(URL.EDIT_USER, {
        method: "post",
        data: user
    });
}

export const remove = (user) => {
    return request(URL.DELETE_USER, {
        method: "post",
        data: user
    });
}

