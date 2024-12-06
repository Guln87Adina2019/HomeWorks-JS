// const artists = [
//     {
//       name: "Michael Jackson",
//       songs: ["Thriller", "Beat It", "Billie Jean"]
//     },
//     {
//       name: "Billie Eilish",
//       songs: ["Bad Guy", "Ocean Eyes", "Bury a Friend", "Happier"]
//     },
//     {
//       name: "Kairat Nurtas",
//       songs: ["Ne istedin?", "Mahabbatim-ai", "Arman"]
//     }
//   ];
  
  
//   artists[2].songs[1] = "Baika";
  
//   console.log(`Singer: ${artists[0].name}`);




const artists=[
  {name:'Michale Jackson', songs: ['Smooth Criminal', 'Billie Jean','Beat It', 'Earth Song']},
  {name:'Billie Eilish', songs: ['Bad Guy', 'Lovely', 'Lunch', 'Chihiro']},
  {name: 'Kairat Nurtas', songs: ["Ne istedin?", "Mahabbatim-ai", "Arman"]}
]

artists[2].songs[1] = 'Baika';
console.log(artists[2].songs[1]);

console.log(artists[0].songs[artists[0].songs.length - 1]);
console.log(artists.songs);

const shortSongs = artists[1].songs.filter(song => song.length <= 6);
console.log(shortSongs);