import axios from "axios";

// Create a new axios instance for the API
const Api = axios.create({
  baseURL: "http://localhost:3000", // local backend server address
//  baseURL: "https://lodestone-app.up.railway.app/", // Railway backend server address
});

export default Api;
