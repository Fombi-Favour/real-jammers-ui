import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { MdDownloadForOffline } from 'react-icons/md'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { fetchUser } from '../utils/FetchUser'

const Pin = ({ feed }) => {

  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);
  const navigate = useNavigate();
  const [userInfo] = fetchUser();

  const alreadySaved = !!(feed?.save?.filter((item) => item.id === userInfo.uid))

  return (
    <div className='flex justify-between items-center m-2 cursor-pointer shadow-lg hover:shadow-xl rounded-lg overflow-hidden relative'>
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`pin-details/${feed?.id}`)}
        className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
      >
        <video 
          src={feed.videoUrl}
          muted
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => e.target.pause()}
        />
        {postHovered && (
          <div
            className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50'
            style={{ height: '100%'}}
          >
            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <a 
                  href={`${feed?.videoUrl}?dl=`}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className='bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none'>
                    <MdDownloadForOffline />
                  </a>
              </div>
              {alreadySaved ? (
                <button type='button' className='bg-[#f1b23bea] opacity-70 hover:opacity-100 text-white font-medium px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none'>
                  {feed?.save?.length} Saved
                </button>
              ) : (
                <button
                onClick={(e) => {
                  e.stopPropagation()
                }}
                type='button' className='bg-[#f1b23bea] opacity-70 hover:opacity-100 text-white font-medium px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none'>
                  Save
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Pin