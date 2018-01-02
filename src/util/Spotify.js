/* Declare an empty variable that will hold the user's access token.
/ `let` instead of `const` because the value of accessToken is liable to change */
let accessToken; // defined (but not initialized) i.e. a variable that will be used later
const clientId = '7448c52ab91d44508b10679b0e954d5d';
const redirectUri = 'http://localhost:3000/' // should it be in quotes?
const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

// Create a Spotify module, first as an empty object.
const Spotify = {
  getAccessToken: () => {
    /* Check if the user's access token is already set. If it is, return the
    value saved to access token.
    To check if userAccessToken is set, 78/99, 2nd p */
    if (accessTokenMatch && expiresInMatch) {
      // Set the access token value
      accessToken = accessTokenMatch[1];
      // Set a variable for expiration time
      const expiresIn = Number(expiresInMatch[1]);
      // Set the access token to expire at the value for expiration time
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      /* Clear the parameters from the URL, so the app doesn't try grabbing the
      access token after it has expired.
      i.e. wipes the access token and URL parameters. */
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      // To redirect a user
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl; // redirect a user
    }
  },
  // returns a promise that will eventually resolve to the list of tracks from the search.
  search: term => {
    const accessToken = Spotify.getAccessToken();
    // the start of promise chain
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
      // Add an Authorization header to the request containing the access token.
      {
        headers: { Authorization: `Bearer ${accessToken}`}
      }).then(
        // Convert the returned response to JSON, using a callback function
        response => {
          return response.json();
        }
      ).then(jsonResponse => {
        // If the JSON does not contain any tracks, return an empty array
        if (!jsonResponse.tracks) {
          return [];
      } // otherwise, map the converted JSON to an array of tracks
        return jsonResponse.tracks.map(track => (
          {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }
        ));
      }); // 2nd then()
  },

  savePlaylist(playlistName, trackURIs) {
    if (!(playlistName && trackURIs)) {
      return ; // return what?
    }
    // Create 3 default variables
    const accessToken = 'current_user'; // current user's access token
    const headers = { Authorization: `Bearer ${accessToken}` };
    const userId;

    // Make a request that returns the user's Spotify username.
    return fetch('https://api.spotify.com/v1/me',
    {headers: headers}).then(
      // Convert the response to JSON and save the response id parameter to the user's ID variable.
      response => {
        return response.json();
      }
    ).then(jsonResponse => {
      userId = jsonResponse.id;
    });


  }



};





// export the Spotify module to expose it to other components of the Jammming app.
export default Spotify;
