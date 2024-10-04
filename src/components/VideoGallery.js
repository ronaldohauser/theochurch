import React from 'react';
import styled from 'styled-components';
import { FaYoutube } from 'react-icons/fa';

const VideoSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: black; /* Fundo preto */
`;

const VideoTitleContainer = styled.div`
  display: flex;
  align-items: center; /* Alinhando verticalmente o ícone e o texto */
  justify-content: center; /* Centralizando horizontalmente */
`;

const VideoTitle = styled.h2`
  font-size: 32px;
  margin-left: 10px; /* Espaço entre o ícone e o texto */
  margin-bottom: 20px;
  color: white; /* Cor do texto branco */

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

// Adicionando props para personalizar ícone
const YoutubeIcon = styled(FaYoutube)`
  color: white;
  margin-right: 10px;
  margin-top: -18px;
  width: ${({ size }) => size || '40px'};
  height: ${({ size }) => size || '40px'}; /* Altura do ícone */
  position: ${({ position }) => position || 'relative'}; /* Posição do ícone */
`;

const VideoGallery = ({ iconSize, iconPosition }) => {
  return (
    <VideoSection>
      <VideoTitleContainer>
        <YoutubeIcon size={iconSize} position={iconPosition} /> {/* Ícone do YouTube */}
        <VideoTitle>Pregações</VideoTitle>
      </VideoTitleContainer>
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
