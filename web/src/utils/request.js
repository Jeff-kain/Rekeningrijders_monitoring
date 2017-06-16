import axios from 'axios'
import config from '../../config'

// Store request timestamp in `config`
axios.interceptors.request.use(config => {
    config.rqtimestamp = new Date()
    return config
}, function(error) {
    // Do something with request error
    return Promise.reject(error)
})

axios.interceptors.response.use(config => {
    config.rstimestamp = new Date()
    return config
}, function(error) {
    // Do something with request error
    return Promise.reject(error)
})

// axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl)
// export default axios
const baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.env.API_URL : config.build.env.API_URL).replace(/['"]+/g, '');

export default {
    getHeaders() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    },
    get(url, params) {
        return axios({
            method: 'get',
            url: url,
            params,
            headers: this.getHeaders()
        })
    },
    post(url, data) {
        return axios({
            method: 'post',
            url: baseURL + url,
            data: data,
            headers: this.getHeaders()
        })
    },
    put(url, data) {
        return axios({
            method: 'put',
            url: baseURL + url,
            data: data,
            headers: this.getHeaders()
        })
    },
    form(url, formdata) {
        return axios({
            method: 'post',
            url: baseURL + url,
            data: formdata
        })
    }
}