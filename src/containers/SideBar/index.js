import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import _Logo from '../../components/svg-images/camera';
import _Nav from '../../components/Navigation';
import TextInput from '../../components/TextInput';
import Link from '../../components/Link';
import { white, dividerColor } from '../../style/colors';
import { onGetUsers, onSelectUser } from '../../actions/userAction';
import { onGetPhotos, onClearPhotos } from '../../actions/photoAction';
import NotFound from '../NotFound';

const Wrapper = styled.div`
  background-color: ${white};
`;

const Logo = styled(_Logo)`
  width: 28px;
  height: 28px;
`;

const TopBarWrapper = styled.div`
  background-color: ${white};
  height: 100vh;
  width: 360px;
  position: fixed;
  z-index: 9999;
  border-right: solid 1px ${dividerColor};
`;

const TopBar = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-around;
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

const UsersBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100% - 65px);
  overflow-y: auto;
`;

const AButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 6px 8px;
`;

class SideBar extends Component {
  state = {
    lastScrollTop: 0,
    topBarFixed: false,
    searchTxVal: '',
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.queryValue !== this.props.queryValue &&
      nextProps.queryValue !== this.state.searchTxVal &&
      nextProps.queryValue === ''
    ) {
      this.setState({ searchTxVal: '' });
    }
  }

  onHandleGetUsers = () => {
    const { onGetUsers } = this.props;
    const { searchTxVal } = this.state;
    debounce(() => {
      onGetUsers({query: searchTxVal, page: 1, per_page: 15, url: 'search/users'});
    }, 600)();;
  }

  onSearchTxChange = e => {
    e.persist();
    console.log(1111, e.target);
    this.setState({ searchTxVal: e.target.value }, () => {
      this.onHandleGetUsers();
    });
  };

  onSelectUser = (username) => {
    const { onSelectUser, onClearPhotos, onGetPhotos } = this.props;
    onSelectUser({username});
    onClearPhotos();
    onGetPhotos({query: '', page: 1, per_page: 3, url: `/users/${username}/photos`});
    this.props.history.push('/photos');
  }

  render() {
    const { users, selectedUser } = this.props.users;
    const { searchTxVal } = this.state;
    const isUserAvailable = users && users.length > 0;

    return (
      <Wrapper>
        <TopBarWrapper>
          <TopBar>
            <Link to='/'><Logo /></Link>
            <Controller>
              <SearchTx
                value={searchTxVal}
                onChange={this.onSearchTxChange}
                hintText="Search Users"
                rounded
              />{' '}
            </Controller>
          </TopBar>
          <UsersBlock>
            {!isUserAvailable && <NotFound />}
            {users && users.map((user, index) => {
              return <AButton key={index} onClick={() => {this.onSelectUser(user.username)}}>{user.username}</AButton>
            })}
          </UsersBlock>
        </TopBarWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps, {
  onGetUsers,
  onSelectUser,
  onClearPhotos,
  onGetPhotos
})(withRouter(SideBar));
