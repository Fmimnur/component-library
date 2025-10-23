import styled from 'styled-components';
import { IImgProps } from './Img.types';

const StyledImg = styled.img<IImgProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  border-radius: ${({ rounded }) => (rounded ? '50%' : '0')};
  object-fit: cover;
`;

const Img = (props: IImgProps) => <StyledImg {...props} />;

export default Img;
