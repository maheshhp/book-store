import React, { Component } from 'react';
import './leftNav.css';

class LeftNav extends Component {
  render() {
    return (
      <div className="LeftNav">
        <h3>Bs</h3>
        <div className="NavIcons">
          <div><i className="material-icons">refresh</i></div>
          <div><i className="material-icons">settings</i></div>
        </div>
      </div>
    );
  }
}

export default LeftNav;
