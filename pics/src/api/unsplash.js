import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID s4xQwxGdG4TSwaAjhVVMXLYyPaiBhv1x775zJvTC9Io'
      }
});