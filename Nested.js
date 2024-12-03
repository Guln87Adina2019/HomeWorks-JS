const artists = [
    {
      name: "Michael Jackson",
      songs: ["Thriller", "Beat It", "Billie Jean"]
    },
    {
      name: "Billie Eilish",
      songs: ["Bad Guy", "Ocean Eyes", "Bury a Friend", "Happier"]
    },
    {
      name: "Kairat Nurtas",
      songs: ["Ne istedin?", "Mahabbatim-ai", "Arman"]
    }
  ];
  
  
  artists[2].songs[1] = "Baika";
  
  console.log(`Singer: ${artists[0].name}`);