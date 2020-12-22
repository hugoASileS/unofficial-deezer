import React from 'react';
import { Link } from 'react-router-dom';
import { selectArtist } from '../../../redux/ducks/artistsDucks';
import { useDispatch } from 'react-redux';
import { Badge, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TracksList from '../../../components/Track/TracksList';

const AlbumCover = ({ album, showArtist = true }) => {
  const dispatch = useDispatch();

  return (
    <Col>
      <Link to={`/albums/${album.id}`}>
        <img src={album.cover_medium} alt="album cover" />
      </Link>
      <dl>
        <dt>Album</dt>
        <dd>
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </dd>
        {showArtist && (
          <>
            <dt>Artista</dt>
            <dd>
              <Link to={`/artists/${album.artist.id}`} onClick={() => dispatch(selectArtist(album.artist))}>
                {album.artist.name}
              </Link>
            </dd>
          </>
        )}
        {album.genres &&
          album.genres.data.map((genre) => {
            return (
              <Link to={`/genres/${genre.id}`} key={genre.id}>
                <Badge variant="info">{genre.name}</Badge>
              </Link>
            );
          })}
      </dl>
    </Col>
  );
};

TracksList.propTypes = {
  album: PropTypes.object,
  showArtist: PropTypes.bool,
};
export default AlbumCover;
