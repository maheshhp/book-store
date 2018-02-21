import React, { Component } from 'react';
import { connect } from 'react-redux';
import './authorRow.css';

class AuthorRow extends Component {
  render() {
    const renderRows = [];
    for (const author in this.props.savedBooks) {
      console.log(author);
      renderRows.push(<div className="AuthorRow" key={author}>
        <h2>{author}</h2>
      </div>);
    }
    return renderRows;
  }
}

const mapStateToProps = state => ({
  savedBooks: state.savedBooks,
});


export default connect(mapStateToProps, null)(AuthorRow);
