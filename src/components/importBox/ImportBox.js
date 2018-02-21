import React, { Component } from 'react';

import './importBox.css';

class ImportBox extends Component {
  render() {
    return (
      <div className="ImportBox">
        <h3>Oops ! No books found!</h3>
        <h3>Import them now?</h3>
        <button onClick={this.props.getBooks}><i className="material-icons">refresh</i></button>
      </div>
    );
  }
}

export default ImportBox;
