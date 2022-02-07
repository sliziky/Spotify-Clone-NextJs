import { signOut, useSession } from 'next-auth/react';
import { FilePlus, Heart, House, MagnifyingGlass, Playlist, Rss } from 'phosphor-react';
import React from 'react';
import Playlists from './Playlists';
import Router from 'next/router'
import { Session } from 'next-auth';
import spotifyApi from '../lib/spotify';
import { useRecoilState } from 'recoil';
import { playlistState } from '../atoms/atoms';
function Sidebar() {
  const {data, status} = useSession();
  const session = data?.session as any;
  const token = data?.token as any;

  const loggedIn = session?.user;
  const [playlists, setPlaylists] = useRecoilState(playlistState);
  React.useEffect(() => {
    if (session) {
      spotifyApi.setAccessToken(token.access_token);
    }
  }, [token])

  React.useEffect(() => {
    async function fetchUserPlaylists() {
      if (session && session.user) {
        spotifyApi.setAccessToken(token.access_token);
         if (spotifyApi.getAccessToken()) {
           const pl = (await spotifyApi.getUserPlaylists()).body.items;
           setPlaylists(pl);
         }
      }
    }
    fetchUserPlaylists();
  }, [session, token])
  return (
    <div className='flex flex-col space-y-4 p-5 mr-2 ml-2 pr-5'>
      <button className='flex items-center space-x-4 hover:text-gray-400' onClick={() => {
        if (loggedIn) { signOut(); }
        else { Router.push('/login') }
      }}>
        <p>{loggedIn ?  "Logout" : "Login"}</p>
      </button>
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
      <Playlists playlists={playlists || []}/>
    </div>
  );
}

export default Sidebar;
