import React, { Node } from 'react';
import styled from 'styled-components';
import { primaryColor1 } from '../../style/colors';

const SvgImg = styled.svg`
  display: inline-block;
  color: ${props => props.color};
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  user-select: 'none';
  ${props =>
    props.fillFromParent
      ? ``
      : `fill: ${props.hovered ? props.hoverColor : props.color};`};
`;

const SvgImage = ({
  children,
  viewBox,
  size,
  color,
  fillFromParent,
  ...others
}) => (
  <SvgImg
    {...others}
    size={size}
    color={color}
    fillFromParent={fillFromParent}
    viewBox={viewBox}>
    {children}
  </SvgImg>
);

SvgImage.defaultProps = {
  size: 20,
  color: primaryColor1,
  fillFromParent: false,
};

export default SvgImage;
