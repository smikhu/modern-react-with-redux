import axios from 'axios';

const KEY = 'AIzaSyAQjqruEqhvLA1j9POwNgwsTBvZ9-fVTSo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        // type: 'video',
        maxResults: 5,
        key: KEY
    }
});