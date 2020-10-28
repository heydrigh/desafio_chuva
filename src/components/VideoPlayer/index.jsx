import React from 'react';

import { VideoContainer } from './styles';

import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <VideoContainer>
      <ReactPlayer
       url="https://www.youtube.com/watch?v=vlqzksfc0Gw"
       controls={true}
       width={783}
       height={439}
       />
    </VideoContainer>
  );
}

export default VideoPlayer;