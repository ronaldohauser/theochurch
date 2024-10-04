import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaYoutube, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'; 
import logo from '../assets/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 8px;
  position: relative;
  z-index: 1;
  font-family: 'Poppins', sans-serif;
`;

const Logo = styled.img`
  width: 100px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    padding: 50px 20px;
    gap: 20px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
    justify-content: space-around;

    ${({ isOpen }) => isOpen && `
      transform: translateX(0);
    `}
  }
`;

const IconLink = styled.a`
  color: white;
  font-size: 28px;
  transition: color 0.2s;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const YouTubeIcon = styled(IconLink)`
  font-size: 32px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 28px;
  font-weight: bold;
  transition: color 0.2s;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;

  &:hover {
    color: #ccc;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
  z-index: 2000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} alt="Theo Church Logo" />
      </Link>
      <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <Nav isOpen={menuOpen}>
        {!menuOpen && (
          <>
            <YouTubeIcon href="https://www.youtube.com/@Theochurch23" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </YouTubeIcon>
            <IconLink href="https://www.facebook.com/theochurch23/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </IconLink>
            <IconLink href="https://www.instagram.com/theochurch23/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </IconLink>
          </>
        )}
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/sobre-nos">SOBRE</NavLink>
        <NavLink to="/agenda">AGENDA</NavLink>
        <NavLink to="/ministerios">MINISTÉRIOS</NavLink>
        <NavLink to="/celulas">CÉLULAS</NavLink> {/* Novo menu adicionado */}
        <NavLink to="/contato">CONTATO</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
