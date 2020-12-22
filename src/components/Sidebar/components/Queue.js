import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { setPlaylist } from '../../../redux/ducks/playerDucks';

const Sidebar = () => {
  const queue = useSelector((state) => state.players.tracks);
  const currentTrack = useSelector((state) => state.players.current);
  const dispatch = useDispatch();

  return (
    <div>
      {queue.map((track, index) => {
        return (
          <div key={track.id}>
            {currentTrack && currentTrack.id === track.id ? (
              <span className="text-black-50">{track.title}</span>
            ) : (
              <Button
                variant="outline-success"
                onClick={() => dispatch(setPlaylist({ track: { ...track, index }, tracks: queue }))}
              >
                {track.title}
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
