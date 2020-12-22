import React from 'react';
import { Link } from 'react-router-dom';

const AlbumCover = ({ album, match }) => {
  return (
    <div>
      <Link to={`${match.url}/${album.id}`}>
        <img src={album.cover_medium} alt="album cover" />
      </Link>
      <dl>
        <dt>Título</dt>
        <dd>
          <Link to={`${match.url}/${album.id}`}>{album.title}</Link>
        </dd>
        <dt>Artista</dt>
        <dd>
          <Link to={`artists/${album.artist.id}`}>{album.artist.name}</Link>}
        </dd>
      </dl>
    </div>
  );
};

export default AlbumCover;
