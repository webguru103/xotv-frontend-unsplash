import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Photos from '../../components/Photos';
import { onGetPhotos, onClearPhotos } from '../../actions/photoAction';
import NotFound from '../NotFound';

const Title = styled.h2`
  margin: 40px 0;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

class UserPhotos extends Component {
  componentDidMount() {
    const { onGetPhotos, username } = this.props;
    if (username)
      onGetPhotos({query: '', page: 1, per_page: 3, url: `/users/${username}/photos`});
  }

  render() {
    const { photos, isLoading, page } = this.props.photos;
    const { onGetPhotos, username } = this.props;
    const main = () =>
      photos && photos.length > 0 ? (
        <Photos
          items={photos}
          onScrollToLoad={() =>
            isLoading || !username ? console.log('Loading') : onGetPhotos({query: '', page: page, per_page: 3, url: `/users/${username}/photos`})
          }
        />
      ) : <NotFound />;
    return (
      <Wrapper>
        <Helmet>
          <title>Selected User - user's Photos</title>
        </Helmet>
        <Title>{username ? `${username}'s photos` : 'Photos List'}</Title>
        {main()}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
  username: state.users.username
})

export default connect(mapStateToProps, {
  onGetPhotos,
  onClearPhotos
})(UserPhotos);
