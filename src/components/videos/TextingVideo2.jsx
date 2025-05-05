import React from 'react'
import textingvideo from '../../assets/media/TextingVideo.mov'

const TextingVideo2 = () => {
  return (
    <div>
      <video class="rounded-xl" autoPlay loop>
        <source src={ textingvideo }/></video>
    </div>
  );
};

export default TextingVideo2;