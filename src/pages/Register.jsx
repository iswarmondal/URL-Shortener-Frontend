import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: null,
        email: null,
        password: null,
        confirmPassword: null
    });

    const [error, setError] = useState(undefined);

    const [userNameExsist, setUserNameExists] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(userData.password === userData.confirmPassword){
            let newUserData = {
                username: userData.username,
                email: userData.email,
                password: userData.password
            };
            axios({
                url: `${process.env.REACT_APP_BASE_URL}/api/user/register`,
                method: 'POST',
                data: newUserData
            })
            .then((res)=>{
                if(res.data.success){
                    alert("Done !");
                    navigate("login/?newUser=true&from=register")
                }else{
                    setError(res.data.message);
                }
            })
            .catch(error =>{
                setError(error.message);
                console.log(error);
            })
        }else{
            setError("Password and Confirm Password are not matching !")
        }
    }

    const handleChange = (e) =>{
        setUserData({...userData, [e.target.name]: e.target.value});
    }
    const handleUserNameChange = (e) =>{
        setUserData({ ...userData, [e.target.name]: e.target.value });
        console.log(setUserData);

        // Check if the username already exists
        axios({
            url: `${process.env.REACT_APP_BASE_URL}/api/user/check-username`,
            method: 'POST',
            data: { username : e.target.value }
        })
        .then(res=>{
            console.log(res.data);
            if (res.data.success == true){
                setUserNameExists(false);
            }else{
                setUserNameExists(true);
            }
        })
        .catch(error=>{
            console.log(error.message);
            setError("Cannot check the username if it exists")
        })
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center mt-4'>
                <h1 className="font-semibold text-3xl">Register</h1>
                <h3 className='mt-3 text-red-700 font-semibold underline underline-offset-4'>{error}</h3>

                <form className='mt-4 flex flex-col justify-center items-center'>
                    <div className='flex relative'>
                        <input
                        type="text" 
                        className='border-2 p-4 rounded-md border-zinc-400 mt-5'
                        placeholder='Username..?'
                        name='username'
                        required
                        onChange={handleUserNameChange} />
                        <div className='text-red-600 absolute top-[50%] right-[10%] font-semibold text-xs'>{userNameExsist? "Already used":""}</div>
                    </div>

                    <input
                    type="email" 
                    className='border-2 p-4 rounded-md border-zinc-400 mt-5'
                    placeholder='Email..?'
                    name='email'
                    required
                    onChange={handleChange} />

                    <input 
                    type="password" 
                    className={`border-2 p-4 rounded-md border-zinc-400 mt-5 ${error? ' border-red-600' : ""}`} 
                    placeholder='Password..?' 
                    name='password'
                    required
                    onChange={handleChange}
                    />

                    <input 
                    type="password" 
                    className={`border-2 p-4 rounded-md border-zinc-400 mt-5 ${error ? ' border-red-600' : ""}`}
                    placeholder='Confirm Password..?'
                    name='confirmPassword'
                    required
                    onChange={handleChange} />

                    <input 
                    type="submit"
                    value="Register" 
                    className='border rounded-md w-28 py-3 mt-6 bg-green-400 hover:bg-green-500 hover:w-24 hover:cursor-pointer text-white'
                    onClick={handleSubmit} />
                </form>
            </div>
        </>
    )
}

export default Register