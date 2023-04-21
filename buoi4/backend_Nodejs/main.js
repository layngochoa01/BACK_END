const Topics = [
    {
        topic: 'Front-end',
        coures: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'ReactJS'
            },
            {
                id: 3,
                title: 'Javacript'
            }
        ]  
    },
    {
        topic: 'Back-end',
        coures: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJs'
            }
        ]
    },
    {}
]

const depth_list=Topics.flatMap(list =>  list.coures);
console.log(depth_list);

var sports_1 = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(sports) {
    return totalGold = sports.reduce((totalGold, a)=> totalGold+a.gold,0);
   
}
console.log( getTotalGold(sports_1));

const sports_2 = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(sports){
    return list_sports=sports.filter(sport => sport.name !=='Bơi lội');
    
}
console.log(getMostFavoriteSport( sports_2));



var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
                  "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  

// Cho trước danh sách một số bộ phim, 
// hãy viết hàm calculateRating để tính điểm trung bình IMDB 
// của những bộ phim mà Christopher Nolan làm đạo diễn. 
function calculateRating(watchList){
    const array_film=watchList.filter(film => film.Director === "Christopher Nolan");
    return list_film_cn=array_film.reduce((avr,imdb)=> (avr+parseFloat(imdb.imdbRating)),0)/(array_film.length);
} 
console.log(calculateRating(watchList));

// --------------------IF/ELSE------------------------------
// Khi a chia hết cho 3 thì 
// return về 1 
// Khi a chia hết cho 5 thì 
// return về 2 
// Khi a chia hết cho 15 thì 
// return về 3
// Kỳ vọng console.log(run(3)) 
// console.log(run(5)) 
// console.log(run(15)) // 3

function modulo(a) {
    if(a % 15 ===0){return 3;}
    else if (a % 5 ===0){return 2;}
    else if (a % 3 ===0){return 1;}
    else return false;
}
console.log( modulo(15));


// Kỳ vọng
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'
// function getCanVoteMessage(a) {
//     return a>=18 ?  'Bạn có thể bỏ phiếu': 'Bạn chưa được bỏ phiếu';
// }
// console.log( getCanVoteMessage(18));

const  getCanVoteMessage= (a) => (a<200 && a>= 0 ?(a>=18 ?  'Bạn có thể bỏ phiếu': 'Bạn chưa được bỏ phiếu'):"vui long nhap lai so tuoi"); 
console.log( getCanVoteMessage(-10));