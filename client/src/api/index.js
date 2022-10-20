import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:4000'});
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return req;
});
export const updatedUser = (id, updatedUser) => API.patch(`/user/${id}`, updatedUser);
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);