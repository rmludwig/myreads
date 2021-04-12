/**
 * Stateless functional component for generating an individual book
 */
import React from 'react';
import ManageBook from './ManageBook.js';

/**
 * @description Takes a book object and builds the book element.
 * @param {object} book - instance of the book being displayed
 * @param {string} id - key used to identify this specific instance of a book element
 * @returns React Book element or empty string if none
 */
const Book = ({book, id}) => {
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
        </li>
        :''
    );
}

export default Book