import React from 'react';
import Track from './Track';
import PropTypes from 'prop-types';

const TracksList = ({ tracks }) => {
  if (tracks.length === 0) {
    return <div>No hay canciones</div>;
  }
  return tracks.map((track, index) => {
    return (
      <table key={track.id}>
        <tbody>
          <Track index={index} track={track} />
        </tbody>
      </table>
    );
  });
};

TracksList.propTypes = {
  tracks: PropTypes.array,
};

export default TracksList;
