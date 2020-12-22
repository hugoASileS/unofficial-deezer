import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbum } from '../../redux/ducks/albumsDucks';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { TracksList } from '../../components/Track';
import { selectArtist } from '../../redux/ducks/artistsDucks';
import { Loading } from '../../components/Loading';
import { Badge, Row } from 'react-bootstrap';
import AlbumCover from './components/AlbumCover';
import ArtistCover from '../ArtistsPage/components/ArtistCover';

const AlbumDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector((state) => state.albums.album);

  useEffect(() => {
    dispatch(getAlbum(albumId));
  }, [dispatch, albumId]);

  if (!album) {
    return <Loading />;
  }

  return (
    <div>
      <Row>
        <AlbumCover album={album} match={match} showArtist={false} />
        <ArtistCover artist={album.artist} />
      </Row>
      <TracksList tracks={album.tracks.data} />
    </div>
  );
};

export default AlbumDetailPage;
