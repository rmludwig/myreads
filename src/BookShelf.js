/**
 * Stateless functional component for generating a shelf with many books
 */
import React from 'react';
import Book from './Book.js';

 const BookShelf = ({shelfType, books}) => {
    // build a shelf for holding multiple books, as long as some are found in the list.
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfType}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.length > 0 ? books.map((book) => ( <Book book={book} key={book.id}/> )) : ''}
                </ol>
            </div>
        </div>
    );
}

export default BookShelf