import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Button from '../../components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
`;

const Message = styled.h2`
  font-size: 32px;
  font-weight: 600;
  padding: 30px 0px;
`;

const NotFound = () => (
  <Wrapper>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <Message>not found any things :(</Message>
    <Button label="Back to Home" primary href="/" />
  </Wrapper>
);

export default NotFound;
