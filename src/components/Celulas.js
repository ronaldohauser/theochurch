import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/slide1.jpg'; // certifique-se de que o caminho para a imagem está correto

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
  font-size: 36px; // Tamanho do título

  @media (max-width: 768px) {
    height: 200px; // Altura reduzida em telas menores
    font-size: 28px; // Tamanho do título reduzido
  }

  @media (max-width: 480px) {
    height: 150px; // Altura ainda menor para telas muito pequenas
    font-size: 24px; // Tamanho do título reduzido
  }
`;

const CelulasContainer = styled.div`
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const CellGroup = styled.div`
  margin: 20px 0;
`;

const CellTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: black;

  @media (max-width: 768px) {
    font-size: 20px; // Tamanho reduzido em telas menores
  }

  @media (max-width: 480px) {
    font-size: 18px; // Tamanho ainda menor para telas muito pequenas
  }
`;

const CellAddress = styled.p`
  font-size: 18px;
  margin: 5px 0;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px; // Tamanho reduzido em telas menores
  }

  @media (max-width: 480px) {
    font-size: 14px; // Tamanho ainda menor para telas muito pequenas
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; // Permite que os botões se movam para a próxima linha se não houver espaço

  @media (max-width: 480px) {
    flex-direction: column; // Coloca os botões em coluna em telas muito pequenas
    align-items: center; // Centraliza os botões
  }
`;

const StyledButton = styled(Link)`
  background-color: black;
  color: white;
  padding: 10px 0;
  font-size: 18px;
  text-decoration: none;
  width: 150px; // largura fixa para os botões terem o mesmo tamanho
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 16px; // Tamanho reduzido em telas menores
    width: 120px; // Largura menor em telas menores
  }

  @media (max-width: 480px) {
    font-size: 14px; // Tamanho ainda menor para telas muito pequenas
    width: 100%; // Botões ocupam toda a largura disponível
  }
`;

// Componente principal
const Celulas = () => {
  return (
    <div>
      <BannerContainer>
        <h1>Células</h1>
      </BannerContainer>
      <CelulasContainer>
        <CellGroup>
          <CellTitle>THEO OSASCO: sexta-feira às 20h</CellTitle>
          <CellAddress>Rua Pernambucana 360 - Torre 1 - Apto 204</CellAddress>
        </CellGroup>
        <CellGroup>
          <CellTitle>THEO VILA FORMOSA: sexta-feira às 20h</CellTitle>
          <CellAddress>Rua Fábio 249</CellAddress>
        </CellGroup>
        <CellGroup>
          <CellTitle>THEO GUARULHOS: sexta-feira às 20h</CellTitle>
          <CellAddress>Rua Inah Sampaio Dogneli 155</CellAddress>
        </CellGroup>
        <CellGroup>
          <CellTitle>THEO PENHA: sexta-feira às 20h</CellTitle>
          <CellAddress>Av Cda. Elisabeth de Rebiano 2000 - Torre 3 - Apto 104</CellAddress>
        </CellGroup>
        <CellGroup>
          <CellTitle>THEO DATE: sexta-feira às 20h</CellTitle>
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
