import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectArtist } from '../../redux/ducks/artistsDucks';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Loading } from '../../components/Loading';
import ArtistCover from './components/ArtistCover';

const ArtistsPage = () => {
  const artists = useSelector((state) => state.artists);
  const dispatch = useDispatch();

  if (!artists) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Artistas</h2>
      <Row>{artists.data && artists.data.map((artist) => <ArtistCover key={artist.id} artist={artist} />)}</Row>
    </div>
  );
};

export default ArtistsPage;
