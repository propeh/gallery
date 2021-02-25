import axios from 'axios';

const Api = {
    getPhotos: (data) => axios({
        method: 'get',
        url: process.env.REACT_APP_BASE_API_URL + '/photos',
        params: data
    }),
    searchPhotos: (data) => axios({
        method: 'get',
        url: process.env.REACT_APP_BASE_API_URL + '/search/photos',
        params: data
    })
}

export default Api;