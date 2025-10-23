import styled from 'styled-components';
import { IHeroImageProps } from './HeroImage.types';

const HeroWrapper = styled.div<IHeroImageProps>`
  position: relative;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  height: ${({ height }) => height || '300px'};
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ overlayColor }) => overlayColor || 'rgba(0,0,0,0.4)'};
  }
`;

const HeroImage = (props: IHeroImageProps) => <HeroWrapper {...props} />;

export default HeroImage;
