import React from 'react';
import { useSelector } from 'react-redux';
import AlbumCover from './components/AlbumCover';
import { Loading } from '../../components/Loading';
import { Row } from 'react-bootstrap';

const AlbumsPage = ({ match }) => {
  const albums = useSelector((state) => state.albums);
  if (!albums) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Albums</h2>
      <Row>{albums.data && albums.data.map((album) => <AlbumCover key={album.id} album={album} match={match} />)}</Row>
    </div>
  );
};

export default AlbumsPage;
