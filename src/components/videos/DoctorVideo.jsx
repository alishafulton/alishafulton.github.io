import React from 'react'
import doctorvideo from '../../assets/media/VideoUser.mov'

const DoctorVideo = () => {
  return (
    <div >
      <video class="rounded-xl aspect-square object-cover" autoPlay loop>
        <source src={ doctorvideo }/></video>
    </div>
  );
};

export default DoctorVideo;