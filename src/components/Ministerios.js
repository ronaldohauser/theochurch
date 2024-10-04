import React, { useState } from 'react';
import styled from 'styled-components';
import bannerImage1 from '../assets/slide1.jpg';
import bannerImage2 from '../assets/slide2.jpg';
import bannerImage3 from '../assets/slide3.jpg';
import bannerImage4 from '../assets/slide1.jpg';

const MinistriesContainer = styled.div`
  padding: 64px 0 0; /* Ajuste conforme a altura do seu header */
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const CardContainer = styled.div`
  perspective: 1000px;
  margin: 0;
`;

const Card = styled.div`
  width: 100vw;
  height: 350px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s, box-shadow 0.3s;
  cursor: pointer;

  &.flipped {
    transform: rotateY(180deg);
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: rotateY(180deg);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 28px;
  margin: 0;
  color: ${(props) => (props.isFront ? 'white' : 'black')};
  text-shadow: none;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
  padding: 10px;
  color: ${(props) => (props.isFront ? 'white' : 'black')};
  max-width: 80%;
`;

const Verse = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: ${(props) => (props.isFront ? 'white' : 'black')};
  max-width: 80%;
  font-style: italic;
`;

const MinistryCard = ({ title, image, description, verse }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer onClick={() => setFlipped(!flipped)}>
      <Card className={flipped ? 'flipped' : ''}>
        <CardFront image={image}>
          <Title isFront>{title}</Title>
        </CardFront>
        <CardBack>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Verse>{verse}</Verse>
        </CardBack>
      </Card>
    </CardContainer>
  );
};

const Ministries = () => {
  const ministries = [
    {
      title: 'Louvor e Adoração',
      image: bannerImage1,
      description: 'Este grupo é responsável pela música durante os cultos, incluindo a escolha de canções e a preparação de apresentações.',
      verse: 'Salmos 100:1 - "Celebrai com júbilo ao Senhor, todos os moradores da terra."'
    },
    {
      title: 'Apoio Social',
      image: bannerImage2,
      description: 'Este grupo trabalha em iniciativas sociais, como arrecadação de alimentos e apoio a pessoas em situação de vulnerabilidade.',
      verse: 'Mateus 25:40 - "Em verdade vos digo que, quando o fizestes a um destes meus pequeninos irmãos, a mim o fizestes."'
    },
    {
      title: 'Educação e Discipulado',
      image: bannerImage3,
      description: 'Este grupo oferece estudos bíblicos e grupos de discipulado para adultos e jovens, promovendo retiros espirituais e palestras.',
      verse: '2 Timóteo 2:15 - "Procura apresentar-te a Deus, aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade."'
    },
    {
      title: 'Comunicação e Mídia',
      image: bannerImage4,
      description: 'Este grupo é responsável pela comunicação da igreja, incluindo redes sociais, site e materiais promocionais.',
      verse: 'Marcos 16:15 - "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura."'
    }
  ];

  return (
    <MinistriesContainer>
      {ministries.map((ministry, index) => (
        <MinistryCard
          key={index}
          title={ministry.title}
          image={ministry.image}
          description={ministry.description}
          verse={ministry.verse}
        />
      ))}
    </MinistriesContainer>
  );
};

export default Ministries;
