/**
 * Stateless functional component for generating a shelf with many books
 *
 * BookShelf a shelf for holding multiple books, as long as some are found in the list.
 */
import React from 'react';
import Book from './Book.js';

/**
 * @description Builds the book shelf element representing a collection of books.
 * @param {string} shelfType - used for shelf heading and in query
 * @param {func} booksOnShelf - callback to fetch the books for this shelf
 * @returns React BookShelf element
 */
const BookShelf = ({shelfType, booksOnShelf}) => {
    let shelfTitle = "Empty Shelf";
    switch (shelfType) {
        case "currentlyReading":
            shelfTitle = "Currently Reading";
            break;
        case "wantToRead":
            shelfTitle = "Want To Read";
            break;
        case "read":
            shelfTitle = "Read";
            break;
        default:
            shelfTitle = "Unknown Shelf";
    }
    const books = booksOnShelf(shelfType);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.length > 0 ? books.map((book) => ( <Book book={book} key={book.id}/> )) : ''}
                </ol>
            </div>
        </div>
    );
}

export default BookShelf