import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/slide2.jpg';

const BannerContainer = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  height: 500px; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: 36px;

  @media (max-width: 768px) {
    height: 350px; /* Reduz a altura do banner em telas menores */
    font-size: 28px; /* Reduz o tamanho da fonte em telas menores */
  }

  @media (max-width: 480px) {
    height: 300px; /* Reduz ainda mais a altura do banner em telas pequenas */
    font-size: 24px; /* Ajusta ainda mais o tamanho da fonte */
  }
`;

const AgendaContainer = styled.div`
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 10px; /* Reduz o padding em telas menores */
  }
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: black;

  @media (max-width: 768px) {
    font-size: 28px; /* Reduz o tamanho da fonte em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 24px; /* Ajusta ainda mais o tamanho da fonte */
  }
`;

const ScheduleItem = styled.div`
  font-size: 18px;
  margin: 10px 0;
  line-height: 1.5;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px; /* Reduz o tamanho da fonte em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Ajusta ainda mais o tamanho da fonte */
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin: 20px 0;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px; /* Reduz o tamanho da fonte em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Ajusta ainda mais o tamanho da fonte */
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
    font-size: 16px; /* Reduz o tamanho do botão em telas menores */
    padding: 8px 16px; /* Ajusta o padding do botão */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Ajusta ainda mais o tamanho do botão */
    padding: 6px 12px; /* Ajusta o padding do botão */
  }
`;

const Agenda = () => {
  return (
    <div>
      <BannerContainer>
        <h1>Agenda</h1>
      </BannerContainer>
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

export default Agenda;
