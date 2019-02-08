import React from 'react';
import styled from 'styled-components';
import { secondaryColor1, white } from '../../style/colors';

const Image = styled.img`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
`;

const NoImage = styled.div`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  line-height: ${props => `${props.size}px`};
  font-size: ${props => `${props.size / 2}px`};
  text-align: center;
  color: ${white};
  background-color: ${secondaryColor1};
  border-radius: 50%;
`;

const Avatar = ({ className, name, imagePath, size }) =>
  imagePath !== '' ? (
    <Image className={className} src={imagePath} alt={name} size={size} />
  ) : (
    <NoImage className={className} size={size}>
      {name.substr(0, 1)}
    </NoImage>
  );

Avatar.defaultProps = {
  className: void 0,
  size: 40,
};

export default Avatar;
