function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let total = 0

  books.forEach((book) => {
    let borrow = book.borrows
   
    if (borrow[0].returned === false){
      total+= 1
    }
       
  })
  return total
}

function genreCount(genreArray, currentGenre){
  let result = {}
  const filteredGenres = genreArray.filter((genre) => genre === currentGenre);
  const totalGenreCount = filteredGenres.length;

  result.name = currentGenre;
  result.count = totalGenreCount;
  return result;

}

function getMostCommonGenres(books) {
  
  let output = []

  let bookGenres = books.map((book)=>book.genre)
  const genreObject=books.map((book)=>genreCount(bookGenres,book.genre));
  for (let i = 0; i < genreObject.length; i++) {
    if (output.includes(genreObject[i]) === false && output.length < 5) {
      output.push(genreObject[i]);
    }
  }
  output.sort((objA, objB) => objB.count - objA.count);
  return output;

}

/* function titleCount(book, titles, currentTitle){
  let result = {}
  const filteredTitles = titles.filter((title) => title === currentTitle);
  const totalTitalCount = getBooksBorrowedCount();

  result.name = currentTitle;
  result.count = totalTitalCount;
  return result;
} */

function getMostPopularBooks(books) {
  
  books.forEach((book)=>{
    count = 0;
  })

 
  books.sort((a, b) => b.borrows.length - a.borrows.length)
  let bookResult = books.slice(0,5)
  let output = bookResult.map((book)=>{return {
    name: book.title,
    count: book.borrows.length
  }}
  )

  return output
}


function getMostPopularAuthors(books, authors) {

  let result = []


  books.sort((a, b) => b.borrows.length - a.borrows.length)
  let output = books.map((book)=>{return {
    name: (authors.find((author)=>author.id === book.authorId).name).first + " " + (authors.find((author)=>author.id === book.authorId).name).last,
    count: book.borrows.length
  }})
  let finalResult = []
  output.forEach((book,index)=>{
    let filteredBooks = output.filter((book2)=>book2.name===book.name)

    if(filteredBooks.length > 1){
      let newCount = 0
      filteredBooks.forEach((fBook)=>newCount += fBook.count)
      book.count = newCount
    }
    if (!finalResult.find((bookName)=>book.name === bookName.name)){
      finalResult.push(book)
    }
    
  })
  return finalResult.slice(0,5)

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
