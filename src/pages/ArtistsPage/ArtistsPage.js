import React from 'react';
import { useSelector } from 'react-redux';

const ArtistsPage = () => {
  const artists = useSelector((state) => state.artists);
  return (
    <div>
      <h2>Artistas</h2>
      {artists && artists.data && artists.data.slice(0).map((album) => <div key={album.id}>{album.name}</div>)}
    </div>
  );
};

export default ArtistsPage;
