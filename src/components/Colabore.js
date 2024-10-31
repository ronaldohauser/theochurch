import React from 'react';
import styled from 'styled-components';
import qrCodeImage from '../assets/qr_code.png'; // Imagem do QR Code

const CollaborationContainer = styled.div`
  padding: 64px 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: black; /* Letras pretas */
  background-color: white; /* Fundo branco */
  margin-top: 80px; /* Adicionei margem superior para evitar sobreposição */
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  font-style: italic; /* Estilo itálico para o versículo */
`;

const DonationOption = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: white; /* Fundo branco */
  border: none; /* Remove as bordas */
`;

const DonationTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: black; /* Letras pretas */
`;

const DonationDetails = styled.p`
  font-size: 16px;
  margin: 0;
  color: black; /* Letras pretas */
`;

const QRCodeWrapper = styled.div`
  margin-top: 20px;
`;

const QRCodeImage = styled.img`
  width: 150px; /* Ajuste o tamanho conforme necessário */
  height: auto;
`;

const VolunteerButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  background-color: black; /* Fundo preto */
  color: white; /* Letras brancas */
  border: none; /* Remove bordas */
  font-size: 16px;
  transition: background-color 0.3s; /* Transição suave ao passar o mouse */
  
  &:hover {
    background-color: #444; /* Tom mais claro de preto ao passar o mouse */
  }
`;

const Collaboration = () => {
  return (
    <CollaborationContainer>
      <Title>Colaboração</Title>
      <Description>
        "Cada um dê conforme determinou em seu coração, <br />
        não com relutância ou por obrigação, pois Deus ama quem dá com alegria." 
        – 2 Coríntios 9:7
      </Description>
      <DonationOption>
        <DonationTitle>Transferência Bancária</DonationTitle>
        <DonationDetails>
          Banco: Nome do Banco<br />
          Agência: 1234<br />
          Conta: 56789-0<br />
          CNPJ: 00.000.000/0000-00
        </DonationDetails>
      </DonationOption>
      <DonationOption>
        <DonationTitle>Doação via Pix</DonationTitle>
        <DonationDetails>
          Chave Pix: CNPJ: 00.000.000/0000-00
        </DonationDetails>
      </DonationOption>
      <QRCodeWrapper>
        <DonationTitle>Faça sua Doação com QR Code</DonationTitle>
        <QRCodeImage src={qrCodeImage} alt="QR Code para Doação" />
      </QRCodeWrapper>
      <DonationOption>
        <DonationTitle>Participe de Nossas Atividades</DonationTitle>
        <DonationDetails>
          Inscreva-se para participar de eventos e projetos comunitários.
        </DonationDetails>
        <VolunteerButton>
          Quero ser voluntário
        </VolunteerButton>
      </DonationOption>
    </CollaborationContainer>
  );
};

export default Collaboration;
