import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import _Unsplash from '../../components/svg-images/camera';
import _Instagram from '../../components/svg-images/instagram';
import _Facebook from '../../components/svg-images/facebook';
import _Twitter from '../../components/svg-images/twitter';
import { white, dividerColor } from '../../style/colors';

const Wrapper = styled.div`
  background-color: ${white};
`;

const Unsplash = styled(_Unsplash)`
  width: 28px;
  height: 28px;
`;
const Instagram = styled(_Instagram)`
  width: 28px;
  height: 28px;
`;
const Facebook = styled(_Facebook)`
  width: 28px;
  height: 28px;
`;
const Twitter = styled(_Twitter)`
  width: 28px;
  height: 28px;
`;

const BottomBarWrapper = styled.div`
  background-color: ${white};
  height: 65px;
  position: fixed;
  z-index: 9998;
  border-top: solid 1px ${dividerColor};
  bottom: 0;
  right: 0;
  left: 360px;
`;

const BottomBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 8px;
`;

const UserInfo = styled.a`
  display: inline-block;
  margin: 4px;
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <BottomBarWrapper>
          <BottomBar>
            <UserInfo target="_blank" href={'https://www.facebook.com'} >
              <Facebook />
            </UserInfo>
            <UserInfo target="_blank" href={'https://www.instagram.com'} >
              <Instagram />
            </UserInfo>
            <UserInfo target="_blank" href={'https://unsplash.com'} >
              <Unsplash />
            </UserInfo>
            <UserInfo target="_blank" href={'https://twitter.com'} >
              <Twitter />
            </UserInfo>
          </BottomBar>
        </BottomBarWrapper>
      </Wrapper>
    );
  }
}

/**
 * so we use Wrap component with withRouter
 * MORE_INFO: https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
 */
export default withRouter(Footer);
