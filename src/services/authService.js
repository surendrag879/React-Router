import axios from 'axios';
const login = async (email, password) => {
    const user = await axios.post("/login", { email, password })
        .then((result) => {
            return result;
        }).catch((error) => {
            return error.response.data;
        })
    return user;
}

const logout = () => {
    localStorage.removeItem("user");
};

export default { login, logout };