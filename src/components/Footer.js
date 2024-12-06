import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

// Estilizando o container do footer
const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;
`;

// Estilizando o texto do footer
const FooterText = styled.p`
  margin: 10px 0;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Estilos para os ícones das redes sociais
const SocialIcons = styled.div`
  margin-top: 10px;

  a {
    color: white;
    font-size: 30px;
    margin: 0 10px;
    transition: color 0.3s;

    &:hover {
      color: #ccc;  // Corrigido o código da cor
    }
  }
`;

// Componente principal
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://www.youtube.com/@Theochurch23" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/theochurch23/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://web.facebook.com/theochurch23" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </SocialIcons>
      <FooterText>
        &copy; {currentYear} Theo Church. Todos os direitos reservados. <br />
        Desenvolvido por Ronaldo Hauser Dias.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
