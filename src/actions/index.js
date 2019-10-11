import { FETCH_GOOGLE_API } from './action-types';

import axios from 'axios';

export const fetchData = (data) => {
    return {
      type: FETCH_GOOGLE_API,
      data
    }
  };
  
  export const fetchGoogleApi = () => {
    return (dispatch) => {
      return axios.get("https://www.googleapis.com/webfonts/v1/webfonts?key=YOURAPIKEY")
        .then(response => {
          dispatch(fetchData(response.data.items))
          //console.log("Action triggered " + response.data.items)
        })
        
        .catch(error => {
          throw(error);
        });
    };
  };