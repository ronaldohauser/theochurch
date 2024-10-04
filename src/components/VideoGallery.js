import React from 'react';
import styled from 'styled-components';

const VideoSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
`;

const VideoTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: black;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  justify-content: center;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
`;

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    z-index: 1;
  }
`;

const videoData = [
  { src: "https://www.youtube.com/embed/KmLCUGvO_7o", title: "Vídeo 1" },
  { src: "https://www.youtube.com/embed/dwAj9VSXrZY", title: "Vídeo 2" },
  { src: "https://www.youtube.com/embed/tpMxcSHCgFs", title: "Vídeo 3" },
];

const VideoGallery = () => {
  return (
    <VideoSection>
      <VideoTitle>Galeria de Pregações</VideoTitle>
      <VideoContainer>
        {videoData.map((video, index) => (
          <VideoWrapper key={index}>
            <VideoFrame src={video.src} title={video.title} allowFullScreen />
          </VideoWrapper>
        ))}
      </VideoContainer>
    </VideoSection>
  );
}

export default VideoGallery;
