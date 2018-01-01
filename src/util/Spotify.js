/* Declare an empty variable that will hold the user's access token.
/ `let` instead of `const` because the value of userAccessToken is liable to change */
let userAccessToken; // defined (but not initialized) i.e. a variable that will be used later
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
      userAccessToken = accessTokenMatch[1];
      // Set a variable for expiration time
      const expiresIn = Number(expiresInMatch[1]);
      // Set the access token to expire at the value for expiration time
      window.setTimeout(() = > userAccessToken = '', expiresIn * 1000);
      /* Clear the parameters from the URL, so the app doesn't try grabbing the
      access token after it has expired.
      i.e. wipes the access token and URL parameters. */
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return userAccessToken;
    } else {
      // To redirect a user
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl; // redirect a user
    }

  }

};





// export the Spotify module to expose it to other components of the Jammming app.
export default Spotify;
