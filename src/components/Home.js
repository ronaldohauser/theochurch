import React from 'react';
import styled from 'styled-components';
import { FaChurch, FaQuestionCircle, FaPray } from 'react-icons/fa';
import VideoGallery from './VideoGallery'; 
import { Link } from 'react-router-dom'; // Importando Link

// Estilos para os componentes
const WelcomeContainer = styled.div`
  text-align: center;
  padding: 20px 10%;
  color: black;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px 5%;
  }
`;

const WelcomeText = styled.h1`
  font-size: 56px;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SubText = styled.p`
  font-size: 24px;
  margin: 10px 0 20px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const VerseText = styled.p`
  font-size: 24px;
  margin: 20px 0 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardsSection = styled.div`
  background-color: #f9f9f9;
  padding: 20px 0;
  text-align: center;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  padding: 40px 20px;
  background-color: #f9f9f9;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 20px 5%;
  }
`;

const Card = styled(Link)`
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1 1 200px;
  max-width: 300px;
  height: 300px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s;
  text-decoration: none; // Removendo o sublinhado do Link
  color: inherit; // Mantendo a cor do texto igual à do Card

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;

const IconContainer = styled.div`
  font-size: 80px;
  margin-bottom: 20px;
  color: #000;
`;

const CardText = styled.p`
  font-size: 18px;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardsTitle = styled.h2`
  font-size: 32px;
  margin: 20px 0;
  color: black;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

// Componente principal
const Home = () => {
  return (
    <div>
      <WelcomeContainer>
        <WelcomeText>Bem-vindo à Theo Church!</WelcomeText>
        <SubText>
          Nascemos de uma preocupação necessária: preparar a noiva para a volta de Cristo. Nossa missão é ser uma comunidade acolhedora e comprometida com o ensino da Palavra, promovendo o crescimento espiritual e a comunhão entre os irmãos.
        </SubText>
        <VerseText>
          "Porque eu sei os planos que tenho para vocês", diz o Senhor, "planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes esperança e um futuro." - Jeremias 29:11
        </VerseText>
      </WelcomeContainer>

      <VideoGallery />

      <CardsSection>
        <CardsTitle>Conheça nossa comunidade!</CardsTitle>
      </CardsSection>

      <CardsContainer>
        <Card to="/sobre-nos"> {/* Redireciona para o menu "Sobre" */}
          <IconContainer>
            <FaChurch />
          </IconContainer>
          <CardText>Procuro uma igreja para congregar.</CardText>
        </Card>
        <Card to="/agenda"> {/* Redireciona para o menu "Agenda" */}
          <IconContainer>
            <FaQuestionCircle />
          </IconContainer>
          <CardText>Não sou Cristão, mas tenho curiosidade.</CardText>
        </Card>
        <Card to="/celulas"> {/* Redireciona para o menu "CÉLULAS" */}
          <IconContainer>
            <FaPray />
          </IconContainer>
          <CardText>Gostaria de fazer um pedido de oração.</CardText>
        </Card>
      </CardsContainer>
    </div>
  );
}

export default Home;
