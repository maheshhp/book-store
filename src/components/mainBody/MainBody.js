import React, { Component } from 'react';
import ImportBox from '../importBox/ImportBox';
import AuthorRow from '../authorRow/AuthorRow';
import './mainBody.css';

class MainBody extends Component {
  render() {
    if (this.props.displayImport === 1) {
      return (
        <div className="MainBody">
          <div className="BodyContainer">
            <ImportBox getBooks={this.props.getBooks} />
          </div>
        </div>
      );
    }
    return (
      <div className="MainBody">
        <div className="AuthorContainer">
          <AuthorRow />
        </div>
      </div>
    );
  }
}

export default MainBody;
