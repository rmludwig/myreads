/**
 * Component for generating a group of book shelves or handling new users without any books
 */
import React from 'react';
import BookShelf from './BookShelf.js';

/**
 * @description Build a group of book shelves as defined by caller or display.
 * @param {array} shelves - list of the shelves that need to be built
 * @param {func} fetchBooks - callback function used to filter the books for a specific shelf
 * @param {boolean} haveBooksLoaded - true if the books have been loaded from API
 * @param {int} quantityBooks - the length of the books array from store
 * @param {func} updateBookLocation - callback function used to update a book location
 * @returns React BookCase element
 */
const BookCase = ({fetchBooks, shelves, haveBooksLoaded, quantityBooks, updateBookLocation}) => {
    return (
        <div className="list-books-content">
            <div>
                {haveBooksLoaded && (quantityBooks > 0) &&
                    shelves.map((shelf) => <BookShelf key={shelf} shelfType={shelf} booksOnShelf={fetchBooks} updateBookLocation={updateBookLocation} />)
                }
                {haveBooksLoaded && (quantityBooks === 0) && (
                    <div className="user-message">
                        <h2>
                            <div>No books found for this User.</div>
                        </h2>
                        <p>To add books, go to the search page by clicking the + at the bottom right of the screen.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookCase;