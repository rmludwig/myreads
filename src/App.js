import React from 'react';
import * as BooksAPI from './BooksAPI'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import BookCase from './BookCase.js';

class BooksApp extends React.Component {
  state = {
    books: [],
    hasLoaded: false
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }));
        this.setState({hasLoaded: true});
      })
  }
  fetchBooksByShelf = (shelfName) => this.state.books.filter((book) => (book.shelf === shelfName));

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/search">
              <div className="search-books">
                <div className="search-books-bar">
                  <Link to="/"><button className="close-search">Close</button></Link>
                  <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author"/>

                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid"></ol>
                </div>
              </div>
            </Route>
            {/* --- THE BOOK SHELF PAGE --- */}
            <Route exact path='/'>
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                {/* --- THIS GENERATES SHELF IF BOOKS ARE FOUND --- */}
                {this.state.hasLoaded ?
                  this.state.books.length > 0 ?
                    <BookCase shelves= {['currentlyReading', 'wantToRead', 'read']} fetchBooks={this.fetchBooksByShelf} />
                    :<div className="user-message">
                      <h2>
                        <div>No books found for this User.</div>
                      </h2>
                      <p>To add books, go to the search page by clicking the + at the bottom right of the screen.</p>
                    </div>
                  :"" /* <h2><div className="user-message">Books are loading...</div></h2> */
                }
                <div className="open-search">
                  <Link to="/search"><button>Add a book</button></Link>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
