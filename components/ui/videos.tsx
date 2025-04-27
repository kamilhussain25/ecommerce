import React from 'react'


const Video = () => {
  return (
    <div className='relative w-full h-[600px] overflow-hidden object-contain'><video className='w-full ' src="video1.mp4" autoPlay loop muted></video></div>
  )
}

export default Video