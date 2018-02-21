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
          <h5>{this.props.books[book].name}</h5>
          <h3 className="BookRating">{this.props.books[book].rating}</h3>
          <h3 className="BookAuthor">{this.props.books[book].author}</h3>
        </div>
      </div>);
    }
    return booksArray;
  }
}

export default BookBox;
