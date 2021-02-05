import axios from "axios";
// create user
export const createUser = async ({ username, email, password, name, check }) => await axios.post('http://localhost:5050/api/user', { username, email, password, name, check });
