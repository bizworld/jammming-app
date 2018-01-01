/* Declare an empty variable that will hold the user's access token.
/ `let` instead of `const` because the value of userAccessToken is liable to change */ 
let userAccessToken; // defined (but not initialized) i.e. a variable that will be used later

// Create a Spotify module, first as an empty object.
const Spotify = {
  getAccessToken: () => {
    /* Check if the user's access token is already set. If it is, return the
    value saved to access token. */
    if (userAccessToken) { // to check if userAccessToken is set? 78/99, 2nd p
      return userAccessToken; // paused here!
    } else if (URL) { // check the URL to see if it has just been obtained (if not already set)
      // see 79/99 for details
    } else if () { // 80/99 and 81/99

    }
  }

};





// export the Spotify module to expose it to other components of the Jammming app.
export default Spotify;
