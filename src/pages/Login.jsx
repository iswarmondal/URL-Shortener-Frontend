import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: null,
        password: null
    });

    const [error, setError] = useState(undefined);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.password !== null && userData.username !== null) {
            let userLoginData = {
                username: userData.username,
                password: userData.password
            };
            axios({
                url: `${process.env.REACT_APP_BASE_URL}/api/user/login`,
                method: 'POST',
                data: userLoginData
            })
                .then((res) => {
                    if (res.data.success) {
                        alert("Login successful !");
                        localStorage.setItem("authToken", res.data.authToken);
                        navigate("/?perviousUser=true&from=login")
                    } else {
                        setError(res.data.message);
                    }
                })
                .catch(error => {
                    setError(error.response.data.message);
                    console.log(error.response.data.message);
                })
        } else {
            setError("Please enter username and password !")
        }
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center mt-4'>
                <h1 className="font-semibold text-3xl">Login</h1>
                <h3 className='mt-3 text-red-700 font-semibold underline underline-offset-4'>{error}</h3>

                <form className='mt-4 flex flex-col justify-center items-center'>
                    <div className='flex relative'>
                        <input
                            type="text"
                            className='border-2 p-4 rounded-md border-zinc-400 mt-5'
                            placeholder='Username..?'
                            name='username'
                            required
                            onChange={handleChange} />
                    </div>

                    <input
                        type="password"
                        className={'border-2 p-4 rounded-md border-zinc-400 mt-5'}
                        placeholder='Password..?'
                        name='password'
                        required
                        onChange={handleChange}
                    />

                    <input
                        type="submit"
                        value="Login"
                        className='border rounded-md w-28 py-3 mt-6 bg-green-400 hover:bg-green-500 hover:w-24 hover:cursor-pointer text-white'
                        onClick={handleSubmit} />
                </form>
            </div>
        </>
    )
}

export default Login