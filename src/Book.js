/**
 * Stateless functional component for generating an individual book
 */
import React from 'react';
import ManageBook from './ManageBook.js';

const Book = ({book, id}) => {
    // build book style and return book, unless no book is passed
    const bookStyle = {width: 128, height: 193, backgroundImage: `url(${book ? book.imageLinks.thumbnail : ''})`};
    return (
        book ?
        <li key={id}>
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={bookStyle}></div>
                <ManageBook />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors.join()}</div>
            </div>
        </li> :
        ''
    );
}

export default Book