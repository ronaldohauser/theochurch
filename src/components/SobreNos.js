import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/slide3.jpg'; // Verifique se a imagem está no caminho correto
import { Link } from 'react-router-dom'; // Importando Link

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

const SobreNosContainer = styled.div`
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: black;
`;

const AboutText = styled.p`
  font-size: 18px;
  margin: 10px 0;
  line-height: 1.5;
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

const SobreNos = () => (
  <div>
    <BannerContainer>
      <h1>A Theo Church</h1>
    </BannerContainer>
    <SobreNosContainer>
      <Title>Sobre Nós</Title>
      <AboutText>
        Estabelecida a partir de uma visão divina recebida pelo Pastor Eder Luis, atendemos a um chamado poderoso que visa preparar a noiva de Cristo para a Sua gloriosa volta. Em um mundo repleto de incertezas e desafios, nossa missão é fundamentar os irmãos em um estudo profundo da Palavra de Deus, capacitando-os a viver uma vida cristã autêntica e transformadora. Acreditamos que cada um de nós é chamado a viver em conformidade com os princípios de Deus, e nos esforçamos para ser um reflexo do Seu amor em nossas vidas e comunidades.
      </AboutText>
      <AboutText>
        Theo significa "Deus Supremo". Nós acreditamos que a igreja não é apenas um edifício, mas uma comunidade vibrante e acolhedora, onde cada membro é valorizado e encorajado a crescer espiritualmente. Através de cultos inspiradores, estudos bíblicos e momentos de comunhão, buscamos promover um ambiente onde o amor de Cristo é exemplificado em cada ação. Cada atividade que realizamos visa construir relacionamentos sólidos e promover um ambiente de acolhimento, onde todos possam se sentir em casa e encorajados a darem sempre o seu melhor para esse Deus, o Deus Supremo.
      </AboutText>
      <AboutText>
        Convidamos você a fazer parte dessa jornada de fé. Juntos, vamos crescer na Palavra, fortalecer nossa relação com Deus e nos preparar para a missão que Ele nos confiou: levar o Evangelho a todos os cantos da Terra. Nossa comunidade é um lugar onde cada voz é ouvida, e cada passo em direção a Deus é celebrado em unidade.
      </AboutText>
      {/* Botão para a página de agenda */}
      <Button to="/agenda">AGENDA</Button>
    </SobreNosContainer>
  </div>
);

export default SobreNos;
