import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextTrack } from '../../redux/ducks/playerDucks';

const MainPlayer = () => {
  const current = useSelector((state) => state.players.current);
  const audioRef = useRef();
  const dispatch = useDispatch();

  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.load();
  }
  return (
    <footer data-testid="player" className="fixed-bottom">
      Main player
      {current && (
        <audio controls ref={audioRef} autoPlay onEnded={() => dispatch(nextTrack())}>
          <source src={current.preview} type="audio/mpeg" />
          <source src={current.preview} type="audio/mpeg" />
          <source src={current.preview} type="audio/mpeg" />
          <source src={current.preview} type="audio/mpeg" />
          <source src={current.preview} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </footer>
  );
};

export default MainPlayer;
