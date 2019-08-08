const youtube = searchTerm => {
  const params = {
    URL: 'https://www.googleapis.com/youtube/v3/',
    part: 'snippet',
    maxResults: 5,
    key: process.env.REACT_APP_API_KEY,
    searchTerm
  };

  const { URL, part, maxResults, key } = params;
  return fetch(
    `${URL}search?part=${part}&maxResults=${maxResults}&key=${key}&q=${searchTerm}`
  ).then(res => res.json());
};

export default youtube;
