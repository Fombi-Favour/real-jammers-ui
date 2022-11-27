import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { CameraOutline } from 'react-ionicons'
import { FaEye } from 'react-icons/fa'

import { updateProfile } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'

import User from '../assets/user.png'
import { auth, db } from '../firebase'

const RegisterInput = () => {

    //input + error hooks
    const [photo, setPhoto] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await createUser(photo, email, password);
            // adding data to firestore
            await addDoc(collection(db, "users"), {
                image: photo,
                firstName: firstname,
                lastName: lastname,
                userName: username,
                email: email,
                password: password,
                category: "",
                mainInstrument: "",
                noAlternateInstrument: "",
                quarter: "",
                city: "",
                region: "",
                phoneNumber: "",
                facebook: "",
                youtube: "",
                instagram: "",
                
            })
            alert("Successfully registered");
            updateProfile(auth.currentUser, {
                displayName: username,
                photoURL: photo,
            })
            navigate('/dashboard', {replace: true});
        }catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }

    // Show password hook
    const [showPassword, setShowPassword] = useState(false);
    
    // Image uploaer hooks
    const [picture, setPicture] = useState(null);
    const img = useRef();

    const handleImage = (e) => {
        let pic = URL.createObjectURL(e.target.files[0]);
        setPicture(pic);
    }

    const dataImage = (e) => setPhoto(e.target.value)

  return (
    <div className='flex flex-col justify-center'>
        <div className='sm:w-[460px] md:w-[750px] lg:max-w-[480px] mx-2 sm:mx-auto bg-gray-900 rounded-lg'>
            <h2 className='text-white text-2xl font-bold mt-5'>Sign Up</h2>
            <form className='p-6' onSubmit={handleSubmit}>
                {/* Upload image field */}
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col w-[135px] h-[135px] relative'>
                        <img src={picture ? picture : User} alt="User" className='w-full h-full rounded-full bg-gray-200 shadow-md' />
                        <div className='absolute bottom-1 right-1 flex justify-center items-center z-10 bg-white p-1 rounded-full'>
                            <div className='bg-cyan-700 p-[4px] rounded-full cursor-pointer' onClick={() => img.current.click()}>
                                <CameraOutline color={'white'} width='20px' height='20px' />
                            </div>
                        </div>
                        <input ref={img} type="file" id="image" hidden accept='image/*' onChange={e => {
                            handleImage(e); dataImage(e);
                        }} />
                    </div>
                </div>
                <h4 className='text-white text-sm mt-1'>Upload your image</h4>
                {/* First Name field */}
                <div className='p-1 flex rounded bg-gray-800 mt-2'>
                    <input onChange={(e) => setFirstname(e.target.value)} type="text" id='firstname' placeholder='First Name' className='p-1 px-2 appearance-none text-gray-200 bg-gray-800 outline-none w-full' required />
                </div>
                {/* Last Name field */}
                <div className='p-1 flex rounded bg-gray-800 mt-2'>
                    <input onChange={(e) => setLastname(e.target.value)} type="text" id='lastname' placeholder='Last Name' className='p-1 px-2 appearance-none text-gray-200 bg-gray-800 outline-none w-full' required />
                </div>
                {/* username field */}
                <div className='p-1 flex rounded bg-gray-800 mt-2'>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id='username' placeholder='Username' className='p-1 px-2 appearance-none text-gray-200 bg-gray-800 outline-none w-full' required />
                </div>
                {/* Email Address field */}
                <div className='p-1 flex rounded bg-gray-800 mt-2'>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder='Email Address' className='p-1 px-2 appearance-none text-gray-200 bg-gray-800 outline-none w-full' required />
                </div>
                {/* Password field */}
                <div className='p-1 flex rounded bg-gray-800 mt-2'>
                    <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password' } id='password' placeholder='Password' className='p-1 px-2 appearance-none text-gray-200 bg-gray-800 outline-none w-full' required />
                    <FaEye className='text-slate-100 m-2' size={20} onClick={() => setShowPassword((prevState) => !prevState)} />
                </div>
                {/* Button Sign up */}
                <button className='m-3 p-3 w-60 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default RegisterInput