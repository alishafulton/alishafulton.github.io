import React from 'react'
import nursevideo from '../../assets/media/NurseVideo.mp4'

const TextingVideo = () => {
  return (
    <div class="w-full">
      <video class="rounded-xl" autoPlay loop>
        <source src={ nursevideo }/></video>
    </div>
  );
};

export default TextingVideo;