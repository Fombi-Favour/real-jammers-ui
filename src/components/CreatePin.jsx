import React, { useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import Spinner from './Spinner'
import { categories } from './Sidebar'
import Pic from '../assets/emyIcon.png'

const CreatePin = ({ user }) => {

  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(false);
  const [category, setCategory] = useState(null);
  const [videoAsset, setVideoAsset] = useState(null);
  const [wrongVideoType, setWrongVideoType] = useState(false);

  const navigate = useNavigate();

  const UploadVideo = (e) => {}
  const savePin = ( ) => {}

  return (
    <div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
      {fields && (
        <p className='text-red-500 mb-5 text-xl transition-all duration-150 ease-in'>please fill in all the fields.</p>
      )}
      <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full'>
        <div className='bg-secondaryColor p-3 flex flex-0.7 w-full'>
          <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
            {loading && <Spinner />}
            {wrongVideoType && <p>Wrong video type</p>}
            {!videoAsset ? (
              <label>
                <div className='flex flex-col items-center justify-center h-full cursor-pointer'>
                  <div className='flex flex-col justify-center items-center'>
                    <p className='font-bold text-2xl'>
                      <AiOutlineCloudUpload />
                    </p>
                    <p className='text-lg'>Click to upload</p>
                  </div>
                  <p className='mt-32 text-gray-400'>Recommendation: use high-quality.....</p>
                </div>
                <input
                  type="file"
                  name='upload-video'
                  onChange={UploadVideo}
                  className='w-0 h-0'
                />
              </label>
            ) : (
              <div className='relative h-full'>
                <p>My Video</p>
                <button
                  type='button'
                  className='absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-full duration-500 ease-in-out'
                  onClick={() => setVideoAsset(null)}
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full'>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add your title here..."
            className='outline-none text-2xl sm:text-3xl font-medium border-b-2 border-gray-200 p-2'
          />
          {user && (
            <div className='flex gap-2 my-2 items-center bg-white rounded-lg'>
              <img src={Pic} alt="profile" className='w-10 h-10 rounded-full' />
              <p className='font-medium'>{user.displayName}</p>
            </div>
          )}
          <input
            type='text'
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="What is your video about"
            className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2'
          />
          <input
            type='text'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Add a destination link"
            className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2'
          />
          <div className='flex flex-col'>
            <div>
              <p className='mb-2 font-semibold text-lg sm:text-xl'>Choose Pin Category</p>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className='outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
              >
                <option value="other" className='bg-white'>Select Category</option>
                {categories.map((category) => (
                  <option className='text-base border-0 outline-none capitalize bg-white text-black' value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex justify-end items-end mt-5'>
              <button
                type='button'
                onClick={savePin}
                className='bg-red-500 text-white font-semibold p-2 rounded-full w-28 outline-none'
              >
                Save Pin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePin