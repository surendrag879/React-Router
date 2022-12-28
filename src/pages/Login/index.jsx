import React, { useEffect, useState } from 'react'
import './login.css';
import { useNavigate } from 'react-router-dom';
const initialState = {
    userName: '',
    password: '',
}
const Login = () => {
    const [values, setValues] = useState(initialState);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }
    const submit = () => {
        console.log(values);
        localStorage.setItem('user', JSON.stringify(values))
        setValues(initialState)
    }
    // useEffect(()=>{
    //     let login = localStorage.getItem('user');
    //     if(!login){
    //         navigate('login');
    //     }
    //     else{
    //         navigate('/');
    //     }
    // })
    return (
        <>
            <div className='loginPage'>
                <h1>Login</h1>
                <input type={'text'}
                    value={values.userName}
                    name='userName'
                    onChange={handleChange}
                    placeholder='enter user name' /><br /><br />

                <input type={'password'}
                    value={values.password}
                    name='password'
                    onChange={handleChange}
                    placeholder='enter password' /><br /><br />
                <button onClick={submit}>Submit</button>
            </div>

        </>
    )
}

export default Login