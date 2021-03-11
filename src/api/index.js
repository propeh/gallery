import axios from 'axios';
import {BASE_API_URL, CLIENT_ID} from "../constants";

const Api = {
    getPhotos: (data) => axios({
        method: 'get',
        url: process.env.REACT_APP_BASE_API_URL + '/photos',
        params: data
    }),
    searchPhotos: (data) => axios({
        method: 'get',
        url: process.env.REACT_APP_BASE_API_URL + '/search',
        params: data
    }),
    getTopics: (data) => axios({
        method: 'get',
        url: process.env.REACT_APP_BASE_API_URL + '/topics',
        params: data
    }),
    getTopicBySlug: (slug, data) => axios({
        method: 'get',
        url: BASE_API_URL + `/topics/${slug}`,
        params: data,
    }),
    getTopicPhotos: (slug, data) => axios({
        method: 'get',
        url: BASE_API_URL + `/topics/${slug}/photos`,
        params: data
    })
}

export default Api;