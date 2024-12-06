import React, { useState } from 'react';
import styled from 'styled-components';

// Corrigir o caminho para as imagens importadas corretamente
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';

// Estilos para os componentes
const WelcomeText = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin: 0;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const InfoTitle = styled.h2`
  font-size: 28px;
  margin-top: 20px;
  font-weight: 500;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const InfoText = styled.p`
  font-size: 18px;
  margin: 8px 0;
  line-height: 1.6;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const EventSection = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e0e0e0; /* Removi o border-top */
`;

const EventTitle = styled.h2`
  font-size: 32px;
  margin: 20px 0;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const EventGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0;
`;

const EventCard = styled.div`
  flex: 1 1 50%;
  padding: 0;
  color: ${({ bgColor }) => (bgColor === 'black' ? 'white' : 'black')};
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    display: ${({ bgColor }) => (bgColor === 'white' ? 'none' : 'flex')};
  }
`;

const EventText = styled.p`
  font-size: 20px;
  margin: 5px 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    object-fit: contain; /* Evita cortes na imagem */
    max-height: 418px;
  }
`;

const WelcomeAndScheduleContainer = styled.div`
  text-align: center;
  padding: 20px 10%;
  color: black;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f1f1;
  margin: 100px 0;
`;

const Home = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);  // Estado para controlar a ampliação da imagem
  const [imageSrc, setImageSrc] = useState(null);  // Para armazenar o src da imagem ampliada

  // Função para abrir a imagem
  const handleImageClick = (src) => {
    setIsImageOpen(true);
    setImageSrc(src);
  };

  // Função para fechar a imagem
  const handleCloseImage = () => {
    setIsImageOpen(false);
    setImageSrc(null);
  };

  return (
    <div>
      <WelcomeAndScheduleContainer>
        <WelcomeText>A Igreja Theo Church <br /> espera por você</WelcomeText>
        <InfoTitle>Cultos</InfoTitle>
        <InfoText>Culto de ensino - Quarta-feira às 20h</InfoText>
        <InfoText>Culto da Família - Domingos às 10 e 19h</InfoText>
        <InfoText>Santa Ceia - 1º Domingo de cada mês</InfoText>
        <InfoText>Culto de Oração - 1ª Segunda de cada mês</InfoText>
      </WelcomeAndScheduleContainer>

      <EventSection>
        <EventTitle>Próximos Eventos</EventTitle>
        <EventGrid>
          {/* Linha 1 */}
          <EventCard bgColor="white" hideText={false}>
            <div>
              <EventText as="h3">Ceia do Senhor</EventText>
              <EventText>Junte-se a nós para uma noite especial de reflexão e celebração do sacrifício de Cristo.</EventText>
            </div>
          </EventCard>

          <EventCard bgColor="black" hideText={true}>
            <EventImage src={slide1} alt="Ceia do Senhor" onClick={() => handleImageClick(slide1)} />
          </EventCard>

          {/* Linha 2 */}
          <EventCard bgColor="black" hideText={true}>
            <EventImage src={slide2} alt="Cantata de Natal" onClick={() => handleImageClick(slide2)} />
          </EventCard>

          <EventCard bgColor="white" hideText={false}>
            <div>
              <EventText as="h3">Cantata de Natal</EventText>
              <EventText>Celebraremos o nascimento de Cristo com muita alegria e emoção. Esperança, união e a alegria do amor de Deus.</EventText>
            </div>
          </EventCard>

          {/* Linha 3 */}
          <EventCard bgColor="white" hideText={false}>
            <div>
              <EventText as="h3">Culto da Virada</EventText>
              <EventText>Junte-se a nós para um culto emocionante, onde unimos nossos corações em busca de renovação espiritual e força para enfrentar os desafios do novo ano com fé e esperança.</EventText>
            </div>
          </EventCard>

          <EventCard bgColor="black" hideText={true}>
            <EventImage src={slide3} alt="Culto da Virada" onClick={() => handleImageClick(slide3)} />
          </EventCard>

          {/* Linha 4 */}
          <EventCard bgColor="black" hideText={true}>
            <EventImage src={slide4} alt="Theo Running" onClick={() => handleImageClick(slide4)} />
          </EventCard>

          <EventCard bgColor="white" hideText={false}>
            <div>
              <EventText as="h3">Theo Running</EventText>
              <EventText>Viva uma experiência única de bem-estar e solidariedade. Seja parte dessa jornada em um evento que mistura ação, fé e compromisso com o próximo.</EventText>
            </div>
          </EventCard>
        </EventGrid>
      </EventSection>

      {/* Se a imagem estiver aberta, exibe uma sobreposição para mostrar a imagem ampliada */}
      {isImageOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={handleCloseImage}  // Fecha a imagem quando clicado fora
        >
          <img
            src={imageSrc}
            alt="Imagem Ampliada"
            style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
