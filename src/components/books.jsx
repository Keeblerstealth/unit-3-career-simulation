import { useState } from "react";
import { useEffect } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  console.log(`book list`);
  useEffect(() => {


    const getBooks = async () => {

      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);

      const booksObject = await response.json();
      setBooks(booksObject.books);
      console.log(booksObject.books)


    }
    getBooks();

  }, [])

  return (
    <>


      <h3>Booklist</h3>
      <section id="bookList">

        {

          books.map((singleBook) => {

            return (


              <section id="singleBook" key={singleBook.id} >
                <img
                  src={singleBook.coverimage}
                  // height="250"
                  // width="250" 
                  />
                <h2>{singleBook.title}</h2>


              </section>

            )

          }



          )

        }

      </section>
    </>
  )
  console.log(books)
}
export default Books;