import React, { Component } from 'react';
import './bookBox.css';

class BookBox extends Component {
  render() {
    const booksArray = [];
    for (const book in this.props.books) {
      booksArray.push(<div className="BookBox">
        <div className="BookImage" />
        <div className="BookDeatils">
          <button className="BookLikeButton"><i className="material-icons">stars</i></button>
          <h5>Book Name</h5>
          <h3>Rating</h3>
          <h3>Author</h3>
        </div>
      </div>);
    }
    return booksArray;
  }
}

export default BookBox;
