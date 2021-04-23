import axios from 'axios'
import actions from './favoritesActions'
axios.defaults.baseURL = `https://api.thecatapi.com/v1`

const options = {
    headers: {
        'x-api-key': '2ec59059-c77c-46b9-a3cd-f397344ae5a6',
    }
  };

  const addFavoriteImage = ({id}) => (dispatch) => {
 
    dispatch(addFavoriteImageRequest());
    axios
      .post('/favourites', options)
      .then(( {data} ) => dispatch(addFavoriteImageSuccess(data)))
      .catch((error) => dispatch(addFavoriteImageError(error)))
  }

  export default {addFavoriteImage}