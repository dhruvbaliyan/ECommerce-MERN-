import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "development" === "development" ? "http://localhost:3000/api/v2" : "/api/v2",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
