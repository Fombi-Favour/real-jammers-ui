import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { authDb } from '../firebase-config'
import { getAllFeeds } from '../utils/FetchData'

import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
import Pins from '../container/Pins'

const Feed = () => {

  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllFeeds(authDb).then(data => {
      setFeeds(data);
      setLoading(false);
      console.log(data);
    })
  }, [])

  if(loading) return <Spinner message="We are adding new ideas to your feed!" />

  return (
    <div>
      {feeds && <MasonryLayout feeds={feeds} />}
    </div>
  )
}

export default Feed