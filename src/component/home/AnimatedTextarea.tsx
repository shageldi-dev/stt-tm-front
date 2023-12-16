// AnimatedTextarea.js
import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const StyledTextarea = styled.textarea`
  max-width: 60%;
  min-width: 60%;
  max-height: 250px;
  min-height: 250px;
  padding: 10px;
  margin-top: 22px;
  font-size: 16px;
  border-image: linear-gradient(#2081fb, #9fbcfe) 30;
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  background: transparent;
  outline: none;
  color: white;
`;

const AnimatedTextarea = () => {
  return (
    <StyledTextarea placeholder="Your speech result will be here..." rows={4} />
  );
};

export default AnimatedTextarea;
