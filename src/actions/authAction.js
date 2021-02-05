
// backend axios call\
import axios from "axios";
import {
    LOGIN,
} from './types';

//  login action here
export const login = async (dispatch, { email, password }) => {


    try {
        const response = await axios.post('http://localhost:5050/api/auth/login', { email, password });
        const { data: { user, token } } = response;
        localStorage.setItem('authToken', token);
        console.log(user);
        dispatch({
            type: LOGIN,
            payload: user,
        });
        window.location.href = '/';
    } catch (error) {
        console.log(error);
    }



}; 