import React from 'react';
import { useSelector } from 'react-redux';

const MainPlayer = () => {
  const playlist = useSelector((state) => state.players);

  return (
    <footer data-testid="player" className="fixed-bottom">
      Main player
    </footer>
  );
};

export default MainPlayer;
