import React from 'react';
import Track from './Track';
import PropTypes from 'prop-types';
import { StyledTable } from './component/Styled';

const TracksList = ({ tracks }) => {
  if (tracks.length === 0) {
    return <div>No hay canciones</div>;
  }
  return (
    <StyledTable>
      <tbody>
        {tracks.map((track, index) => {
          return <Track index={index} track={track} key={track.id} tracks={tracks} />;
        })}
      </tbody>
    </StyledTable>
  );
};

TracksList.propTypes = {
  tracks: PropTypes.array,
};

export default TracksList;
