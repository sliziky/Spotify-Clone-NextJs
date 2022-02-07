import { atom } from "recoil";

export const playlistState = atom<SpotifyApi.PlaylistObjectSimplified[]>({
  key: 'playlistState',
  default: [],
})