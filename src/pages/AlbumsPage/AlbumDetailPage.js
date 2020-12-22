import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbum } from '../../redux/ducks/albumsDucks';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const AlbumDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector((state) => state.albums.album);

  useEffect(() => {
    dispatch(getAlbum(albumId));
  }, [dispatch, albumId]);

  if (!album) return <div>vacio</div>;

  return (
    <div>
      <img src={album.cover_medium} alt="album cover" />
      <img src={album.artist.picture} alt="album cover" />
      {album.title} <br />
      {album.release_date} <br />
      <Link to={`/artists/${album.artist.id}`}>{album.artist.name}</Link>
      {album.genres.data.map((genre) => {
        return (
          <div key={genre.id}>
            <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
          </div>
        );
      })}
      {album.duration} <br />
      {album.tracks.data.map((track, index) => {
        return (
          <div key={track.id}>
            <table>
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <b>{track.title}</b>
                  </td>
                  <td className="text-black-50">{track.artist.name}</td>
                  <td>{track.duration}</td>
                  <td>
                    <span>play</span>
                    {/*<span onClick={() => dispatch(setCurrentTrack())}>play</span>*/}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default AlbumDetailPage;
