import styled from 'styled-components';
import { ICardProps } from './Card.types';

const StyledCard = styled.div<ICardProps>`
  background-color: ${({ background }) => background || '#fff'};
  padding: ${({ padding }) => padding || '16px'};
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const Card = ({ children, ...rest }: ICardProps) => (
  <StyledCard {...rest}>{children}</StyledCard>
);

export default Card;
