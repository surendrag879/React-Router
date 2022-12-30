import axios from 'axios';
const login = async (email, password) => {
    // console.log('authService',email,password)
    const user = await axios.post("http://localhost:7000/login", { email, password })
        .then((result) => {
            console.log('api responce',result)
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