import React from 'react';

const Track = ({ track, index }) => {
  return (
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
  );
};

export default Track;
