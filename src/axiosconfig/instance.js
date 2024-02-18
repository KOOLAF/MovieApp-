import axios from "axios";

const AxiosIn = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
export default AxiosIn;
