import axios from 'axios';

export default  axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 695d2cf921626a37c21ff766606144e073d36a84cd407d1909e01283bedb28a1'
    }
})
