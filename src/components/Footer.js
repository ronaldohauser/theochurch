import React from 'react';
import styled from 'styled-components';

// Estilizando o container do footer
const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
`;

// Estilizando o texto do footer
const FooterText = styled.p`
  margin: 0;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
  }
`;

// Componente principal
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        &copy; {currentYear} Theo Church. Todos os direitos reservados. <br />
        Desenvolvido por Ronaldo Hauser Dias.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
