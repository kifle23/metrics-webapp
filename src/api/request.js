import axios from 'axios';

export default axios.create({
  baseURL: 'url',
  headers: {
    'Content-Type': 'application/json',
  },
});
