import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JYPZc2LrwiNCjnClVkB37iwvU3IisZki8_PwLNbHLpA'
    }
})