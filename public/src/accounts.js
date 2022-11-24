function findAccountById(accounts, id) {
  const findID = accounts.find((account) => account.id === id)
  return findID
}

function sortAccountsByLastName(accounts) {
  const sort = accounts.sort((accA, accB) => accA.name.last > accB.name.last ? 1 : -1)
  return sort
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  const bookies = books.forEach((book) => {
    const borrows = book.borrows;
    borrows.forEach(borrow => {
      if (borrow.id === account.id) { total += 1; }
    })
  })
  return total
  /*   let count = 0
    books.forEach((book)=>{
      const borrows = book.borrows;
      count += borrows.reduce((total, borrow)=>{
        console.log("borrowid", borrow.id, " accountid", account.id);  
        if(borrow.id === account.id){total+=1;}  
    return total;
      },0)
    })
    return count */
}

function getBooksPossessedByAccount(account, books, authors) {
  //find what books the account checked out
  //based on author id obtain author 
  //return book object with author nested inside
  let result = []

  books.forEach((book) => {
    const borrows = book.borrows;

    if (borrows[0].returned === false && borrows[0].id === account.id) {

      authors.forEach((author) => {
        if (author.id === book.authorId) {
          book.author = author
        }
      })
      result.push(book)
      
    }
  })
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
