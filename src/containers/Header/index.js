import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EventListener from 'react-event-listener';
import styled from 'styled-components';
import _Logo from '../../components/svg-images/camera';
import _Nav from '../../components/Navigation';
import { maxWidthContent } from '../../style/util';
import TextInput from '../../components/TextInput';
import { white, dividerColor } from '../../style/colors';

const Wrapper = styled.div`
  background-color: ${white};
`;

const Logo = styled(_Logo)`
  width: 28px;
  height: 28px;
`;

const TopBarWrapper = styled.div`
  background-color: ${white};
  height: 65px;
  width: 100%;
  ${props =>
    props.fixed
      ? `
    position: fixed;
    z-index: 9999;
    border-bottom: solid 1px ${dividerColor};
  `
      : `
    position: relative;
  `};
`;

const TopBar = styled.div`
  max-width: ${`${maxWidthContent}px`};
  width: 100%;
  height: 100%;
  top: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
`;

const SearchTx = styled(TextInput)`
  flex: 1;
  margin: 0px 16px;
`;

const Controller = styled.div`
  display: flex;
  align-items: center;
`;

const AButton = styled.button`
  cursor: pointer;
`;

const Nav = styled(_Nav)`
  max-width: ${`${maxWidthContent}px`};
  width: 100%;
  margin: 0 auto;
`;

class Header extends Component {
  state = {
    topBarFixed: false,
    searchTxVal: ''
  }
  handleScroll = e => {
    const { lastScrollTop } = this.state;
    const scrollTop = e.target.body.scrollTop;
    if (scrollTop < lastScrollTop && scrollTop > 0) {
      this.setState({ topBarFixed: true });
    } else {
      this.setState({ topBarFixed: false });
    }
    // set this scrollTop as last
    this.setState({ lastScrollTop: scrollTop });
  };

  render() {
    const { topBarFixed, searchTxVal } = this.state;
    return (
      <Wrapper>
        <EventListener target="window" onScroll={this.handleScroll} />
        <TopBarWrapper fixed={topBarFixed}>
          <TopBar>
            <Logo />
            <Controller>
            </Controller>
          </TopBar>
        </TopBarWrapper>
        <Nav />
      </Wrapper>
    );
  }
}

export default withRouter(Header);
