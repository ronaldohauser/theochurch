import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/slide1.jpg';

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
  margin-top: 60px; /* Garante que o banner não fique oculto pelo header */

  @media (max-width: 768px) {
    height: 200px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    height: 150px;
    font-size: 24px;
  }
`;

const CelulasContainer = styled.div`
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 10px; /* Reduz o padding em telas menores */
  }
`;

const CellGroup = styled.div`
  margin: 20px 0;
`;

const CellTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: black;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const CellAddress = styled.p`
  font-size: 18px;
  margin: 5px 0;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledButton = styled(Link)`
  background-color: black;
  color: white;
  padding: 10px 0;
  font-size: 18px;
  text-decoration: none;
  width: 150px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    width: 120px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    width: 100%;
  }
`;

const Celulas = () => {
  return (
    <div>
      <BannerContainer>
        <h1>Células</h1>
      </BannerContainer>
      <CelulasContainer>
        <CellGroup>
          <CellTitle>OSASCO</CellTitle>
          <CellAddress>Sexta-feira às 20h</CellAddress>
          <CellAddress>Rua Pernambucana 360 - Torre 1 - Apto 204</CellAddress>
        </CellGroup>
        <CellGroup>
          <CellTitle>VILA FORMOSA</CellTitle>
          <CellAddress>Sexta-feira às 20h</CellAddress>
          <CellAddress>Rua Fábio 249</CellAddress>
        </CellGroup>
        <CellGroup>
          <CellTitle>GUARULHOS</CellTitle>
          <CellAddress>Sexta-feira às 20h</CellAddress>
          <CellAddress>Rua Inah Sampaio Dogneli 155</CellAddress>
        </CellGroup>
        <CellGroup>
          <CellTitle>PENHA</CellTitle>
          <CellAddress>Sexta-feira às 20h</CellAddress>
          <CellAddress>Av Cda. Elisabeth de Rebiano 2000 - Torre 3 - Apto 104</CellAddress>
        </CellGroup>
        <CellGroup>
          <CellTitle>THEO CHURCH</CellTitle>
          <CellAddress>Sexta-feira às 20h</CellAddress>
          <CellAddress>Rua Agua Rasa 172</CellAddress>
        </CellGroup>
        <ButtonContainer>
          <StyledButton to="/ministerios">Ministérios</StyledButton>
          <StyledButton to="/contato">Contato</StyledButton>
        </ButtonContainer>
      </CelulasContainer>
    </div>
  );
}

export default Celulas;
