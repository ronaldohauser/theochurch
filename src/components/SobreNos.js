import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/slide3.jpg';
import { Link } from 'react-router-dom';

const BannerContainer = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: 36px;
  text-align: center;

  @media (max-width: 768px) {
    height: 400px; /* Reduz a altura do banner em telas menores */
    font-size: 28px; /* Reduz o tamanho da fonte em telas menores */
  }

  @media (max-width: 480px) {
    height: 300px; /* Reduz ainda mais a altura do banner em telas pequenas */
    font-size: 24px; /* Ajusta ainda mais o tamanho da fonte */
  }
`;

const SobreNosContainer = styled.div`
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

const AboutText = styled.p`
  font-size: 18px;
  margin: 10px 0;
  line-height: 1.5;
  color: black;
  text-align: justify;

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

const QuemSomos = () => (
  <div>
    <BannerContainer>
      <h1>A Theo Church</h1>
    </BannerContainer>
    <SobreNosContainer>
      <Title>Quem Somos</Title>
      <AboutText>
        Estabelecida a partir de uma visão divina recebida pelo Pastor Eder Luis, atendemos a um chamado poderoso que visa preparar a noiva de Cristo para a Sua gloriosa volta. Em um mundo repleto de incertezas e desafios, nossa missão é fundamentar os irmãos em um estudo profundo da Palavra de Deus, capacitando-os a viver uma vida cristã autêntica e transformadora. Acreditamos que cada um de nós é chamado a viver em conformidade com os princípios de Deus, e nos esforçamos para ser um reflexo do Seu amor em nossas vidas e comunidades.
      </AboutText>
      <AboutText>
        Theo significa "Deus Supremo". Nós acreditamos que a igreja deve ser um lugar onde as pessoas possam experimentar a presença viva de Deus e crescer em sua fé. Nossa comunidade é dedicada a ensinar a Palavra de Deus com clareza e verdade, preparando a igreja para a volta de Jesus Cristo. Aqui, você encontrará um ambiente acolhedor e amoroso, onde todos são bem-vindos para adorar, aprender e crescer espiritualmente.
      </AboutText>
      <Button to="/contato">Entre em Contato</Button>
    </SobreNosContainer>
  </div>
);

export default QuemSomos;
