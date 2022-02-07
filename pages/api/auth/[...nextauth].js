import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";
import SpotifyWebApi from "spotify-web-api-node";
import spotifyApi from '../../../lib/spotify';
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      authorization: 'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private',
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        spotifyApi.setAccessToken(token.accessToken);
        spotifyApi.setRefreshToken(token.refresh_token);
        token.refresh_token = account.refresh_token;
        token.access_token = account.access_token;
      }
      return token;
    },
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
})