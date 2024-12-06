import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 8px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px; /* Adicione uma altura fixa */
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

  @media (max-width: 1200px) {
    gap: 20px;
  }

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

const NavLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  transition: color 0.2s;
  white-space: nowrap;

  &:hover {
    color: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: #ccc;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
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

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} alt="Theo Church Logo" />
      </Link>
      <HamburgerIcon onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <Nav isOpen={menuOpen}>
        <NavLink to="/" onClick={handleLinkClick}>HOME</NavLink>
        <NavLink to="/sobre-nos" onClick={handleLinkClick}>SOBRE NÓS</NavLink>
        <NavLink to="/onde-estamos" onClick={handleLinkClick}>ONDE ESTAMOS</NavLink>
        <NavLink to="/colabore" onClick={handleLinkClick}>COLABORE</NavLink>
        <NavLink to="/culto-ao-vivo" onClick={handleLinkClick}>CULTO AO VIVO</NavLink> {/* Adicionando novo item */}
        <NavLink to="/contato" onClick={handleLinkClick}>CONTATO</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
