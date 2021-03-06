import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css';
import BookCase from './BookCase.js';
import SearchForBooks from './SearchForBooks.js';

/**
 * MyReads React application main component and routing handlers
 */
class BooksApp extends React.Component {
    /* Simplified method to instantiate state */
    state = {
        books: [],
        hasLoaded: false
    }
    /* Load Books from API upon component mounting. */
    componentDidMount() {
        this.reStockShelf();
    }
    /* Function to use API to load books. */
    reStockShelf = () => {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }));
                this.setState({hasLoaded: true});
            });
    }
    /* Function to move a book to a new shelf.
     * In order to get the most accurate state of
     * the books, like if two copies of the page
     * are being viewed at the same time, this
     * will get the full list on each book update.
     */
    updateBookLocation = (obj_with_id, shelf_name) => {
        //const self = this;
        BooksAPI.update(obj_with_id, shelf_name)
            .then((response) => {
                //self.reStockShelf();
                this.reStockShelf();
            });
    }
    /* Function to collect the books related to a given shelf */
    fetchBooksByShelf = (shelfName) => this.state.books.filter(
        (book) => (book.shelf === shelfName)
    );
    /* Based on URL render the pages and components as needed */
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        {/* --- THE SEARCH and ADD PAGE --- */}
                        <Route exact path="/search">
                            <SearchForBooks books={this.state.books} searchBooks={this.searchBooks} updateBookLocation={this.updateBookLocation}/>
                        </Route>
                        {/* --- THE BOOK SHELF PAGE --- */}
                        <Route exact path='/'>
                            <div className="list-books">
                                <div className="list-books-title">
                                    <h1>MyReads</h1>
                                </div>
                                <BookCase
                                    shelves= {['currentlyReading', 'wantToRead', 'read']}
                                    fetchBooks={this.fetchBooksByShelf}
                                    haveBooksLoaded={this.state.hasLoaded}
                                    quantityBooks={this.state.books.length}
                                    updateBookLocation={this.updateBookLocation}
                                />
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

export default BooksApp;
