import axios from 'axios';

const SERVER_API_URL = process.env.VUE_APP_SERVER_API_URL;

export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    return axios.get(SERVER_API_URL)
      .then((response) => {
        commit('SET_PRODUCTS_TO_STATE', response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
