import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { MdDownloadForOffline } from "react-icons/md";
import { GoVerified } from 'react-icons/go'
import { getUserInfo } from '../utils/FetchData'
import moment from "moment/moment";

const Pin = ({ feed }) => {
  const [usersId, setUsersId] = useState(null);
  const [userInfo, setUserInfo] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    if(feed) setUsersId(feed.userId);
    if(usersId) getUserInfo(usersId).then((data) => {
      //console.log(data);
      setUserInfo(data)
    });
  },[usersId]);
  

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link
              to={`user-profile/${userInfo?.uid}`}
            >
              <>
              <img
                width={62} height={62}
                className="rounded-full"
                src={userInfo?.image}
                alt="user-profile"
                layout="responsive"
              />
              </>
            </Link>
          </div>
          <div>
            <Link to=''
            >
              <div className="flex items-center gap-2">
                <p className="flex items-center gap-2 font-semibold md:text-md capitalize">
                  {userInfo?.userName} {` `}
                  <GoVerified className="text-blue-400 text-md" />
                </p>
              </div>
            </Link>
            <p className="text-sm font-light">{moment(new Date(parseInt(feed.id)).toISOString()).fromNow()}</p>
          </div>
        </div>
        <p className="lg:ml-20 ml-14 mb-1 ">{feed.title}</p>
      </div>
      <div className="lg:ml-20 flex gap-4 relative">
        <div className="rounded-3xl hover:shadow-lg transition-all duration-500 ease-in-out">
          <Link 
            to={`pin-details/${feed?.id}`}>
            <video
              className="lg:w-[540px] h-[300px] md:h-400px lg:h-[530px] w-[400px] rounded-2xl cursor-pointer"
              src={feed.videoUrl}
              muted
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pin;
