import axios from "axios";
import  ApiUrlConfig  from "../config/ApiUrlConfig";

// import { createLogger } from "vite";

// const BASE_URL = "https://frontend.devlab.alpha-way.com/alpha-way/public/api"; // Load from .env
const BASE_URL = ApiUrlConfig.PUBLIC_API; 


export const apiRequest = async (endpoint, method = "GET", body = null, headers = {}) => {
  try {
    // console.log("endpoint",endpoint);
    const response = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers, // Allows custom headers (e.g., Authorization)
      },
      data: body, // Axios automatically stringifies JSON data
    });

    return response.data; // Axios wraps response in a `data` object
  } catch (error) {
    console.error("API request failed:", error.response || error);
    throw error.response ? error.response.data : error;
  }
};
