/**
 * Stateless functional component for viewing search results
 */
import React from 'react';
import Book from './Book.js';

/**
 * @description Displays the books returned for search.
 * @param {array} books - list of matching books
 * @param {func} updateBookLocation - callback function used to update a book location
 * @returns React BookSearchResults element
 */
const SearchResults = ({books, updateBookLocation}) => {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {books.length > 0 ? books.map((book) => ( <Book book={book} key={book.id} updateBookLocation={updateBookLocation} /> )) : ''}
            </ol>
        </div>
    );
}

export default SearchResults;