import React from 'react';
import { useSelector } from 'react-redux';
import AlbumCover from './components/AlbumCover';

const AlbumsPage = ({ match }) => {
  const albums = useSelector((state) => state.albums);

  return (
    <div>
      <h2>Albums</h2>
      {albums &&
        albums.data &&
        albums.data.slice(0).map((album) => <AlbumCover key={album.id} album={album} match={match} />)}
    </div>
  );
};

export default AlbumsPage;
