import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/slide2.jpg';

// Estilizando os componentes
const BannerContainer = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  height: 300px; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: 36px;
`;

const AgendaContainer = styled.div`
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: black;
`;

const ScheduleItem = styled.div`
  font-size: 18px;
  margin: 10px 0;
  line-height: 1.5;
  color: black;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 20px 0;
  color: black;
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
`;

// Componente principal
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
          Promovemos a comunhão e o estudo da Palavra <br></br>através de nossas células e cultos em lares. <br></br> Venha conhecer e se juntar a nós!
        </Description>

        <Button to="/celulas">VER CÉLULAS</Button>
      </AgendaContainer>
    </div>
  );
};

export default Agenda;
