import axios from "axios";
import axiosInstance from "./axiosinstance";
const BASE_URL = "http://localhost:8080";

class BankService {
    login(userInfo) {
        return axios.post(BASE_URL + "/auth/login", userInfo);
    }
    register(userInfo) {
        return axios.post(BASE_URL + "/auth/register", userInfo);
    }
}

export default new BankService();