import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { TracksList } from '../../components/Track';
import { getArtist } from '../../redux/ducks/artistsDucks';
import { Loading } from '../../components/Loading';
import { Image } from 'react-bootstrap';
import ArtistCover from './components/ArtistCover';

const ArtistsDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const artist = useSelector((state) => state.artists.selected);

  useEffect(() => {
    dispatch(getArtist(artistId));
  }, [dispatch, artistId]);

  if (!artist) {
    return <Loading />;
  }
  return (
    <>
      <ArtistCover key={artist.id} artist={artist} />
      {artist.tracks ? <TracksList tracks={artist.tracks.data} /> : <Loading />}
    </>
  );
};

export default ArtistsDetailPage;
