const BASE_URL = "https://api.spotify.com/v1"

// uses Spotify's Search API to search tracks by track name and artist
const searchTracks = async (http,artist) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/search?type=artist&q=${artist}`
  };
  
  return http(config)
    .then((res) => res.data);
}

/// uses Spotify's Browse API to get song recommendations
const getRecommendations = async (http, { artistID1, artistID2, artistID3 }) => { 
  const config = {
    method: 'get',
    url: `${BASE_URL}/recommendations?seed_artists=${artistID1},${artistID2},${artistID3}`,
  };

  return http(config)
    .then((res) => res.data);
}

module.exports = { searchTracks, getRecommendations }