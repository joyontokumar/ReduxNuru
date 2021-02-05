/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// backend axios call\
import axios from "axios";
import {
    LOGIN,
} from './types';

//  login action here
export const login = async ({ email, password }) => {
    const token = await axios('');
    return {
        type: LOGIN,
        payload: token,
    };
}; 