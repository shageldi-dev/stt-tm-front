// AnimatedTextarea.js
import styled from "styled-components";

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

interface Iprops {
  value: string;
  onChange: (arg0: string) => void;
}

const AnimatedTextarea = (props: Iprops) => {
  return (
    <StyledTextarea
      value={props.value}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      placeholder="Your speech result will be here..."
      rows={4}
    />
  );
};

export default AnimatedTextarea;
