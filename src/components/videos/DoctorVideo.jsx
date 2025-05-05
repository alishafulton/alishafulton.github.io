import React from 'react'
import uservideo from '../../assets/media/VideoUser.mov'

const DoctorVideo = () => {
  return (
    <div >
      <video class="rounded-xl aspect-square object-cover" autoPlay loop>
        <source src={ uservideo }/></video>
    </div>
  );
};

export default DoctorVideo;