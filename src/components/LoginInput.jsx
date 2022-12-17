import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

const LoginInput = () => {

    // input + error hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            const {user} = await signInWithEmailAndPassword(auth, email, password);
            const {refreshToken, providerData} = user;

            localStorage.setItem("user", JSON.stringify(providerData));
            localStorage.setItem('accessToken', JSON.stringify(refreshToken));

            navigate('/dashboard', {replace: true});
        }catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }

    // Show Password hooks
    const [showPassword, setShowPassword] = useState(false);
    
  return (
    <div className='flex flex-col h-[80vh] justify-center items-center space-y-5'>
        <center>
            <h2 className='text-white text-3xl font-bold'>Sign In</h2>
        </center>
        <form className='space-y-5' onSubmit={handleSubmit}>
            <center>
                <input onChange={(e) => setEmail(e.target.value)} className='w-72 sm:w-96 p-2 px-3 bg-[#bababa] placeholder:text-[#efefef] border border-white outline-none rounded-lg text-black' type="email" id='email' placeholder='Email Address' required/>
            </center>
            <center className='w-72 sm:w-96 bg-[#bababa] rounded-lg border border-white p-2 px-3'>
                <input onChange={(e) => setPassword(e.target.value)} className='bg-[#bababa] placeholder:text-[#efefef] mr-10 sm:mr-[8.7rem] outline-none text-black' type={showPassword ? 'text' : 'password'} id='password' placeholder='Password' required />
                <FaEye className='text-slate-700 float-right my-2' onClick={() => setShowPassword((prevState) => !prevState)} />
            </center>
            <center>
                <Link className='text-white text-lg hover:text-bold hover:border-b border-spacing-5 duration-300' to='/'>Forgotten Password?</Link>
            </center>
            <center>
                <input className='w-72 sm:w-96 p-2 px-3 bg-[#df9d39] border border-white outline-none rounded-lg text-black font-semibold hover:bg-[#f1ac3c] hover:text-white duration-300' type="submit" value="Log In" />
            </center>
            <center>
                <h4 className='text-white hover:text-blue-700 cursor-pointer duration-300'>
                    <Link to='/register'>CREATE ACCOUNT</Link>
                </h4>
            </center>
        </form>
    </div>
  )
}

export default LoginInput