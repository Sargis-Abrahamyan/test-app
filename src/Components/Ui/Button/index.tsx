import React from 'react';

import { ButtonProps } from './types';
import * as Styled from './button.styled';

const Button: React.FC<ButtonProps> = ({
  width,
  color,
  bgColor,
  content,
  click,
}) => {
  const ButtonStyle = {
    width,
    color,
    backgroundColor: bgColor,
  };
  return (
    <Styled.Button onClick={click} style={ButtonStyle}>
      {content}
    </Styled.Button>
  );
};

export default Button;
