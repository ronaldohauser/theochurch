import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/slide1.jpg';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

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
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ContatosContainer = styled.div`
  display: flex;
  padding: 20px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px; 
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`;

const ContactItem = styled.p`
  font-size: 1.5rem;
  margin: 5px 0;
  color: black;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 10px;

  a {
    margin-right: 15px; 
    color: black;
    font-size: 2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #555;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const InviteText = styled.p`
  font-size: 1.125rem;
  color: black; 
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  height: 400px;
  padding: 20px;

  @media (max-width: 768px) {
    height: 300px;
    padding: 10px;
  }
`;

const GoogleMap = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Contatos = () => {
  return (
    <div>
      <BannerContainer>
        <h1>Contato</h1>
      </BannerContainer>
      <ContatosContainer>
        <ContactInfo>
          <h2>Endereço</h2>
          <ContactItem>R. Água Rasa, 178 - Vila Reg. Feijó, São Paulo - SP, 03343-010</ContactItem>
          <SocialIcons>
            <a href="https://www.instagram.com/theochurch23/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/theochurch23" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@Theochurch23" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </SocialIcons>
          <InviteText>Siga-nos nas redes sociais e venha nos visitar!</InviteText>
        </ContactInfo>
        <MapContainer>
          <GoogleMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9027351310363!2d-46.57020248502165!3d-23.57481158468159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53cf4c81d851%3A0x1942f00f09cbd39a!2sR.%20%C3%81gua%20Rasa%2C%20178%20-%20Vila%20Reg.%20Feij%C3%B3%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003343-010!5e0!3m2!1spt-BR!2sbr!4v1696422579052!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
          />
        </MapContainer>
      </ContatosContainer>
    </div>
  );
};

export default Contatos;
