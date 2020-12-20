import React from 'react';
import { useSelector } from 'react-redux';

const MainPlayer = () => {
  const playlist = useSelector((state) => state.player.playlist);

  console.log(playlist);

  return <footer data-testid="player">Main player</footer>;
};

export default MainPlayer;
