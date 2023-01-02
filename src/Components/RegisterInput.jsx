import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { MdDelete } from 'react-icons/md'
import { FaEye, FaUser } from 'react-icons/fa'

import { updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage'

import { firebaseApp, auth, db } from '../firebase'

const RegisterInput = () => {

    //input + error hooks
    const [picture, setPicture] = useState(null);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {createUser} = UserAuth();
    const navigate = useNavigate();
    const storage = getStorage(firebaseApp);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            const { user } = await createUser(email, password);
            //console.log(user);
            // adding data to firestore
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                image: picture,
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
                photoURL: picture,
            })
            navigate('/dashboard', {replace: true});
        }catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }

    // Show password hook
    const [showPassword, setShowPassword] = useState(false);
    
    const UploadImage = (e) => {
        const pic = e.target.files[0];
        const storageRef = ref(storage, `Images/${Date.now()}-${pic.name}`);
        const uploadTask = uploadBytesResumable(storageRef, pic);
    
        uploadTask.on("state_changed", (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default: break;
          }
        }, (error) => {
          console.log(error);
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPicture(downloadURL);
          });
        });
      }
    
      const deleteImage = () => {
        const deleteRef = ref(storage, picture);
        deleteObject(deleteRef).then(() => {
          setPicture(null);
        }).catch((error) => {
          console.log(error);
        })
      }
    
      useEffect(() => {
        console.log(picture);
      }, [picture]);
    
  return (
    <div className='flex flex-col justify-center'>
        <div className='sm:w-[460px] md:w-[750px] lg:max-w-[480px] mx-2 sm:mx-auto bg-gray-900 rounded-lg'>
            <h2 className='text-white text-2xl font-bold mt-5'>Sign Up</h2>
            <form className='p-6' onSubmit={handleSubmit}>
                {/* Upload image field */}
                {!picture ? (
            <label>
            <div className="flex justify-center items-center">
              <div className="flex flex-col w-[180px] h-[180px] cursor-pointer justify-center items-center bg-gray-200 rounded-full">
                <p className="font-semibold text-2xl">
                  <FaUser fontSize={40} />
                </p>
                <p className="text-lg">Click to upload profile image</p>
              </div>
            </div>
            <input
              type="file"
              name="upload-image"
              onChange={UploadImage}
              accept="image/*"
              className="w-0 h-0"
            />
          </label>
          ) : (
            <div className="flex justify-center items-center">
              <div className="flex flex-col  justify-center items-center relative">
                <img src={picture} alt="profile" className="w-[170px] h-[160px] rounded-full" />
                <button
                  type="button"
                  className="absolute w-8 h-8 bottom-1 right-3 flex justify-center items-center rounded-full z-10 bg-cyan-700 cursor-pointer outline-none"
                  onClick={deleteImage}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          )}
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