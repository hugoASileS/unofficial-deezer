import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { setPlaylist } from '../../redux/ducks/playerDucks';
import PropTypes from 'prop-types';

const Track = ({ track, index, tracks }) => {
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.players.current);

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <b>{track.title}</b>
      </td>
      <td className="text-black-50">{track.artist.name}</td>
      <td>{track.duration}</td>
      <td>
        {currentTrack && currentTrack.id === track.id ? (
          <Button variant="outline-warning">pausa</Button>
        ) : (
          <Button
            variant="outline-success"
            onClick={() => dispatch(setPlaylist({ track: { ...track, index }, tracks }))}
          >
            play
          </Button>
        )}
      </td>
    </tr>
  );
};

Track.propTypes = {
  track: PropTypes.object,
  index: PropTypes.number,
  tracks: PropTypes.array,
};

export default Track;
