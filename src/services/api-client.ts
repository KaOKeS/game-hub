import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'blablabla' //Generate yout own key at rawg.io to test functionality
    }
})