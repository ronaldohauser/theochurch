import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: white; /* Fundo branco */
  color: black; /* Letras pretas */
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

const IframeWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  margin-bottom: 20px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const AgendaContainer = styled.div`
  background-color: white; /* Fundo branco */
  color: black; /* Letras pretas */
  padding: 20px;
  text-align: center;
  width: 100%;
  max-width: 800px;
  flex-grow: 1;
  margin-top: auto;
  border-radius: 0;
`;

const CultoAoVivo = () => {
  const youtubeLiveUrl = 'https://www.youtube.com/embed/3mtt4QYcb0g?autoplay=1&mute=1';

  return (
    <Container>
      <h1>Culto ao Vivo</h1>
      <h2>Culto da Família</h2>
      <IframeWrapper>
        <iframe
          src={youtubeLiveUrl}
          title="Culto ao Vivo"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </IframeWrapper>
      <AgendaContainer>
        <h3>Horário dos Cultos</h3>
        <p><strong>Domingo:</strong> 10h e 19h</p>
        <p><strong>Quarta:</strong> 20h</p>
      </AgendaContainer>
    </Container>
  );
};

export default CultoAoVivo;
