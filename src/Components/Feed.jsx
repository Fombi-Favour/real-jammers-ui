import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import { getAllFeeds } from '../utils/FetchData'

import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
import Pins from '../container/Pins'
import Pin from './Pin'

const Feed = () => {

  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllFeeds(db).then(data => {
      setFeeds(data);
      setLoading(false);
      console.log(data);
    })
  }, [])

  if(loading) return <Spinner message="We are adding new ideas to your feed!" />

  return (
    <div>
      {feeds && feeds?.map((feed) => (
        <Pin key={feed?.id} feed={feed} className="w-max" />
      ))}
    </div>
  )
}

export default Feed