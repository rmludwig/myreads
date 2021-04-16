/**
 * Controlled component for handing search criteria and calling search results
 * component as search is updated.
 */
import React from 'react';
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import SearchResults from './SearchResults.js';

/**
 * @description Builds the book shelf element representing a collection of books.
 * @param {string} shelfType - used for shelf heading and in query
 * @param {func} booksOnShelf - callback to fetch the books for this shelf
 * @param {func} updateBookLocation - callback function used to update a book location
 * @returns React BookShelf element
 */
class SearchForBooks extends React.Component {
    state = {
        results: []
    }
    /* Function to use API to load books and call sync function */
    fetchMatchingBooks(event) {
        if (event.target.value) {
            BooksAPI.search(event.target.value)
                .then((query_results) => {
                    /* filter on id in order to set known shelf status */
                    const results = this.synchronizeBooksAndResults(query_results, this.props.books);
                    this.setState(() => ({
                        results
                    }));
                })
        }
        else {
            this.setState({results: []});
        }
    }
    /* function to synchronize the shelf value from known books to search results */
    synchronizeBooksAndResults(results, books) {
        if (! Array.isArray(results) || results.length < 1) {
            return [];
        }
        else {
            results.forEach((found_book) => {
                const book_match = books.filter((book) => found_book.id === book.id);
                if (book_match.length === 1) {
                    found_book.shelf = book_match[0].shelf;
                }
            })
            return results;
        }
    }
    /* render the search bar and results */
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input name="search" placeholder="Search by title or author" onChange={(e) => this.fetchMatchingBooks(e)}  />
                    </div>
                </div>
                <SearchResults books={this.state.results} updateBookLocation={this.props.updateBookLocation} />
            </div>
        );
    }
}

export default SearchForBooks;