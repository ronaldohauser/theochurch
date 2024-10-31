import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import video from '../assets/theochurch.mp4';

const VideoContainer = styled.div`
  height: 500px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 109px;

  video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 350px;
    margin-top: 109px;
  }

  @media (max-width: 480px) {
    height: 300px;
    margin-top: 109px;
  }
`;

const AgendaContainer = styled.div`
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: black;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ScheduleItem = styled.div`
  font-size: 18px;
  margin: 10px 0;
  line-height: 1.5;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin: 20px 0;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: black; 
  color: white;
  text-decoration: none; 
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333; 
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const OndeEstamos = () => {
  return (
    <div>
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o formato de vídeo.
        </video>
      </VideoContainer>
      <AgendaContainer>
        <Title>Cultos</Title>
        {["Domingo: 10h e 19h", "Quarta: 20h"].map((item, index) => (
          <ScheduleItem key={index}>{item}</ScheduleItem>
        ))}
        <Title>Eventos Especiais</Title>
        {["Santa Ceia: 1º domingo do mês", "Culto de Oração: 1ª segunda-feira do mês"].map((item, index) => (
          <ScheduleItem key={index}>{item}</ScheduleItem>
        ))}
        <Description>
          Promovemos a comunhão e o estudo da Palavra <br />
          através de nossas células e cultos em lares. <br />
          Venha conhecer e se juntar a nós!
        </Description>
        <Button to="/celulas">VER CÉLULAS</Button>
      </AgendaContainer>
    </div>
  );
};

export default OndeEstamos;
