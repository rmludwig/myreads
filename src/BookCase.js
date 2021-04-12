/**
 * Stateless functional component for generating a group of book shelves
 */
import React from 'react';
import BookShelf from './BookShelf.js';

/**
 * @description Build a group of book shelves as defined by caller.
 * @param {array} shelves - list of the shelves that need to be built
 * @param {func} fetchBooks - callback function used to filter the books for a specific shelf 
 * @returns React BookCase element
 */
const BookCase = ({fetchBooks, shelves}) => {
    return (
        <div className="list-books-content">
            <div> 
                {shelves.map((shelf) => <BookShelf key={shelf} shelfType={shelf} booksOnShelf={fetchBooks} />) }
            </div>
        </div>
    );
}

export default BookCase