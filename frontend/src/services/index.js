const BASE_URL = process.env.VUE_APP_BASE_API;
import axios from 'axios';

const getDataApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/datos`, {});
    return response.data;
  } catch (error) {
    return JSON.parse(error);
  }
};

const createDataApi = async (item) => {
  try {
    console.log("Hlolaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    const response = await axios.post(`${BASE_URL}/api/datos`, item);
    return response.data;
  } catch (error) {
    return JSON.parse(error);
  }
};


export {
	getDataApi,
	createDataApi
}
