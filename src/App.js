import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAction } from './redux/actions';
import Store from './redux/store';
import Reducer from './redux/reducers';
import LeftNav from './components/leftNav/LeftNav';
import MainBody from './components/mainBody/MainBody';
import './App.css';

class App extends Component {
  state = {
    displayImport: 1,
  }
  componentDidMount() {
    fetch('/books/byAuthor')
      .then((response) => {
        if (!response.ok) {
          console.log('Network request failed');
        }
        return response;
      })
      .then(books => books.json())
      .then((booksJson) => {
        console.log(booksJson.books);
        if (JSON.stringify(booksJson.books) === JSON.stringify({})) {
          this.setState({
            displayImport: 1,
          });
        } else {
          this.props.getBooks(booksJson.books);
          this.setState({
            displayImport: 0,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getBooks = () => {
    fetch('/books/populateBookDetails')
      .then((response) => {
        if (!response.ok) {
          console.log('Network request failed');
        }
        return response;
      })
      .then(res => res.json())
      .then((jsonRes) => {
        if (jsonRes.statusCode === 201) {
          fetch('/books/booksWithRatings')
            .then((response) => {
              if (!response.ok) {
                console.log('Network request failed');
              }
              return response;
            })
            .then(books => books.json())
            .then((booksJson) => {
              console.log(booksJson);
              this.props.getBooks(booksJson);
            });
        }
      });
  }
  render() {
    return (
      <div className="App">
        <LeftNav />
        <MainBody getBooks={this.getBooks} displayImport={this.state.displayImport} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedBooks: state.savedBooks,
});

const mapDispatchToProps = dispatch => ({
  getBooks: booksData => dispatch(getAction(booksData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
