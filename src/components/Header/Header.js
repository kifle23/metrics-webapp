import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = (props) => {
  const { heading, previous } = props;

  return (
    <header>
      {
          (previous) ? (
            <Link to={`/${previous}`}>
              <i className={styles.previous} />
            </Link>
          ) : (
            <span />
          )
        }

      <h3>{ heading }</h3>
      <div className={styles.icons}>
        <i className={styles.mic} />
        <i className={styles.settings} />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  previous: PropTypes.string.isRequired,
};
