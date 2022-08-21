import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29398467-8a653d7b4fed816ab704a6050';
const PER_PAGE = 40;

const fetchPictures = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`
  );
  return response.data;
};

export default fetchPictures;
