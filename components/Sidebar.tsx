import { FilePlus, Heart, House, MagnifyingGlass, Playlist, Rss } from 'phosphor-react';
import React from 'react';
import Playlists from './Playlists';

function Sidebar() {
  return (
    <div className='flex flex-col space-y-4 p-5 mr-2 ml-2 pr-5'>
      <button className='flex items-center space-x-4 hover:text-gray-400'>
        <House className='h-6 w-6'/>
        <p>Home</p>
      </button>
      <button className='flex items-center space-x-4 hover:text-gray-400'>
        <MagnifyingGlass className='h-6 w-6'/>
        <p>Search</p>
      </button>
      <button className='flex items-center space-x-4 hover:text-gray-400'>
        <Playlist className='h-6 w-6'/>
        <p>Your Library</p>
      </button>
      <hr className='border-b-3 border-white'/>

      <button className='flex items-center space-x-4 hover:text-gray-400'>
        <FilePlus className='h-6 w-6'/>
        <p>Create playlist</p>
      </button>
      <button className='flex items-center space-x-4 hover:text-gray-400'>
        <Heart className='h-6 w-6'/>
        <p>Liked Songs</p>
      </button>
      <button className='flex items-center space-x-4 hover:text-gray-400'>
        <Rss className='h-6 w-6'/>
        <p>Your episodes</p>
      </button>
      <hr className='border-b-3 border-white'/>
      <Playlists/>
    </div>
  );
}

export default Sidebar;
