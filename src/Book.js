/**
 * Stateless functional component for generating an individual book
 */
import React from 'react';
import ManageBook from './ManageBook.js';

/**
 * @description Takes a book object and builds the book element.
 * @param {object} book - instance of the book being displayed
 * @param {string} id - key used to identify this specific instance of a book element
 * @param {func} updateBookLocation - callback function used to update a book location
 * @returns React Book element or empty string if none
 */
const Book = ({book, id, updateBookLocation}) => {
    /* handle image link discrepancies in the book data */
    let imgLink = '';
    if (book && book.imageLinks && book.imageLinks.thumbnail) {
        imgLink = book.imageLinks.thumbnail;
    }
    const bookStyle = {width: 128, height: 193, backgroundImage: `url(${imgLink})`};
    const authorText = book.authors ? book.authors.join(', ') : '';
    /* A few books do not have an author, this handles that situation */
    if (! authorText) {
        /* the below code can be un-commented to identify books without author */
        /*console.log("bad book = ", book.id, " title = ", book.title); */
    };
    /* function to move shelf pointer */
    const moveToShelf = (shelf) => {
        book.shelf = shelf;
    }

    return (
        book ?
        <li key={id}>
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={bookStyle}></div>
                <ManageBook  id={book.id} location={book.shelf ? book.shelf : 'none'} updateBookLocation={updateBookLocation} moveToShelf={moveToShelf} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{authorText}</div>
            </div>
        </li>
        :''
    );
}

export default Book;