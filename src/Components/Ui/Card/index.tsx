import React from 'react';

import { CardProps } from './types';
import { useAppSelector } from '../../../Hooks/hooks';
import * as Styled from './card.styled';

const Card: React.FC<CardProps> = ({ maxWidth, name, title, children, id }) => {
  const { reports } = useAppSelector((state) => state.report);
  const reportsCount = reports.filter((item) => item.userId === id).length;

  const cardStyle = {
    maxWidth,
  };

  return (
    <Styled.Card style={cardStyle}>
      <Styled.CardHeader>
        <Styled.CardCount>
          {reportsCount && id ? `Count : ${reportsCount}` : title}
        </Styled.CardCount>
        <Styled.CardUserName>{name}</Styled.CardUserName>
      </Styled.CardHeader>
      <Styled.CardContent>{children}</Styled.CardContent>
    </Styled.Card>
  );
};

export default Card;
