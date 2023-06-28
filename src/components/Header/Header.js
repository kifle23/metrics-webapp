import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ heading, previous }) => {
  const hasPreviousLink = Boolean(previous);

  return (
    <header>
      {hasPreviousLink && (
        <Link to={`/${previous}`}>
          <i className="previous" />
        </Link>
      )}

      <h3>{heading}</h3>
      <div className="icons">
        <i className="mic" />
        <i className="settings" />
      </div>
    </header>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  previous: PropTypes.string,
};

Header.defaultProps = {
  previous: null,
};

export default Header;