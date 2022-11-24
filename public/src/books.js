function findAuthorById(authors, id) {

  /*  let find = authors.forEach((author)=>{
     if(author.id === id){
       console.log(author)
       return author
     }
   })
   return find */

  const find = authors.find((author) =>
    author.id === id)
  return find
}

function findBookById(books, id) {
  const find = books.find((book) =>
    book.id === id)
  return find
}

function partitionBooksByBorrowedStatus(books) {
  //first array contains book object that are currently checked out
  //second array contains book object that have been returned
  //returns array with both these arrays
  let checkedOut = []
  let returned = []
  books.forEach((book) => {
    let borrows = book.borrows

    if (borrows[0].returned === true) {
      returned.push(book)
    }
    else { checkedOut.push(book) }
  })
  return [checkedOut, returned]
}

function getBorrowersForBook(book, accounts) {

  let result = []
  
  book.borrows.forEach((borrow)=>{
    accounts.forEach((account)=>{
      if (borrow.id === account.id){
        account.returned = borrow.returned
        if (result.length < 10){
          result.push(account)
        }
      }
    })
  })
  return result

 }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
