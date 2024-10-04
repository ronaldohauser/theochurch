import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

const HeroContainer = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 600px;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
  background: url(${(props) => props.bg}) no-repeat center center/cover;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? 'white' : 'gray')};
  margin: 0 5px;
  cursor: pointer;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 1;
  font-size: 36px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 20px;
`;

const NextButton = styled(NavigationButton)`
  right: 20px;
`;

const slides = [slide1, slide2, slide3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <HeroContainer>
      {slides.map((slide, index) => (
        <Slide key={index} bg={slide} active={currentSlide === index} />
      ))}
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotsContainer>
      <PrevButton onClick={handlePrev}>
        <FaChevronLeft />
      </PrevButton>
      <NextButton onClick={handleNext}>
        <FaChevronRight />
      </NextButton>
    </HeroContainer>
  );
}

export default Hero;
