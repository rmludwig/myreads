/**
 * Stateless functional component for generating the book management menu
 */
import React from 'react';

/**
 * @description Used to build the book management element for a book
 * @returns React BookManagement element
 */
const ManageBook = () => {
    return (
        <div className="book-shelf-changer">
            <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}

export default ManageBook