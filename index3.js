// Є масив об'єктів потрібно на перебір виводити лише
// 2 ключі isPublic, rating
// додатково вивести середне число рейтингу

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  },
  {
    title: "Jacques Gluke",
    author: "Author",
    genres: ["adventure"],
    isPublic: false,
  },
];

for (const { isPublic, rating = 0 } of books) {
  const publicValue = isPublic ? 'public' : 'private';
  
  // console.log(`
  //   isPublic: ${publicValue}
  //   rating: ${rating}
  // `);
}

// console.log(getAverageRating(books), 'averageRating');

function getAverageRating(books) {
  let result = 0;
  let division = 0;

  for (const { rating = 0 } of books) {
    division += rating === 0 ? 0 : 1;

    result += +rating;
  }

  return (result / division).toFixed(2);
}


// console.log(null ?? "test")

console.log(0 ?? "test")

