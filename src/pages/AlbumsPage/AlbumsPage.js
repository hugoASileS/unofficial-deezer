import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPlaylist } from '../../redux/ducks/playerDucks';
import { getAlbums } from '../../redux/ducks/AlbumsDucks';

const AlbumsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('en el useEffect');
    dispatch(getAlbums());
  }, [dispatch]);
  return (
    <div>
      Este es el listado de albums
      <button onClick={() => dispatch(setPlaylist({}))}>play</button>
    </div>
  );
};

export default AlbumsPage;
