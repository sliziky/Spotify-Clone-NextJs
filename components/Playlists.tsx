import React from 'react';

export interface IPlaylistsProps {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}

function Playlists({playlists} : IPlaylistsProps) {
  console.log("9", playlists);
  return (
    <div className="flex flex-col space-y-2 overflow-scroll">
      {playlists.map(p => {
        return <p>{p.name}</p>
      })}
    </div>
  );
}

export default Playlists;
