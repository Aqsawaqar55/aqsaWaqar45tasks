
function make_album(artist: string, title: string, tracks?: number) {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
  
    // If tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
  
    return album;
  }
  
  // Function call to create an album without specifying tracks
  const album1 = make_album('Artist 1', 'Album Title 1');
  console.log(album1);
  
  // Function call to create an album with specifying tracks
  const album2 = make_album('Artist 2', 'Album Title 2', 12);
  console.log(album2);
  
  // Function call to create another album without specifying tracks
  const album3 = make_album('Artist 3', 'Album Title 3');
  console.log(album3);