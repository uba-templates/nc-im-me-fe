import axios from "axios";

const URL_PREFIX = "https://mock.yonyoucloud.com/mock/56/nc";

export default (url, options) =>{
    return axios({
        baseURL : URL_PREFIX,
        method: options.method,
        url: url,
        data: options.data,
        params : options.params
    });
}