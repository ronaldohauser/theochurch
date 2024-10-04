import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px; /* Reduz o tamanho da fonte em telas pequenas */
    padding: 10px; /* Ajusta o padding para telas menores */
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Theo Church. Todos os direitos reservados. <br />
        Desenvolvido por Ronaldo Hauser Dias.
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
