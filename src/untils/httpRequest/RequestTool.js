import axios from 'axios';
import {message} from 'antd'
axios.defaults.baseURL = '';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
if (error) {
    message.error('服务器请求失败');
}
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    
    return Promise.reject(error);
});
const $HTTP = {
    get(url,param={}){
        return axios.get(url,param);
    },
    post(url,param){
      return axios.post(url,param);
    },
    allRequest(requests){
        return axios.all(requests)
    }
}
export default $HTTP;
