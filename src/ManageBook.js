/**
 * Controlled component for generating the book management menu and triggering
 * updates to store and API via function callback in app.
 */
import React from 'react';

/**
 * @description Used to build the book management element for a book
 * @param {string} location - current book position / shelf
 * @param {string} id - the ID for the book using this component
 * @param {func} updateBookLocation - callback function used to update a book location
 * @returns React BookManagement element
 */
 class ManageBook extends React.Component {
    /* Update function to handle shelf change using callback */
    update = (event) => {
        event.preventDefault();
        const selection = event.target;
        /* props, including props.id, is passed here to reduce the size of data sent to api */
        this.props.updateBookLocation(this.props, selection.value);
    }
    /* Render the select options using the props to determine currently selected */
    render() {
        return (
            <div className="book-shelf-changer">
                <select id="shelfSelect" onChange={this.update} value={this.props.location}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default ManageBook