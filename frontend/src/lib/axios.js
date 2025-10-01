import axios from "axios";
const Mode = process.env.NODE_ENV

const axiosInstance = axios.create({
	baseURL:  Mode === "development" ? "http://localhost:3000/api/v2" : "/api/v2",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
