import axios from 'axios';

const KEY = '41689028-c746e1e6e71d95932f933e2cb';
axios.defaults.baseURL = 'https://pixabay.com';
async function requestImage(query, page) {
  const params = {
    q: query,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
  };

  const images = await axios.get('/api/', { params });
  return images.data;
}
export { requestImage };
