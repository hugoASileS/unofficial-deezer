import React from 'react';
import { Link } from 'react-router-dom';
import { selectArtist } from '../../../redux/ducks/artistsDucks';
import { useDispatch } from 'react-redux';
import { Col, Image } from 'react-bootstrap';

const ArtistCover = ({ artist }) => {
  const dispatch = useDispatch();

  return (
    <Col key={artist.id}>
      <Link to={`/artists/${artist.id}`} onClick={() => dispatch(selectArtist(artist))}>
        <Image src={artist.picture_medium} height={250} width={250} />
      </Link>
      <dl>
        <dt>Artista</dt>
        <dd>
          <Link to={`/artists/${artist.id}`} onClick={() => dispatch(selectArtist(artist))}>
            {artist.name}
          </Link>
        </dd>
      </dl>
    </Col>
  );
};

export default ArtistCover;
