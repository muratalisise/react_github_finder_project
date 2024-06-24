import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Buraya ekleyin

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-dark bg-primary'>
          <a href='#' className='navbar-brand'>
            <FontAwesomeIcon icon={this.props.icon} /> {this.props.title}
          </a>
        </nav>
      </div>
    );
  }
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: faGithub
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
}

export default Navbar;
