import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Country.css';
import { getCities } from '../../redux/cities';

const Country = (props) => {
  const {
    name, number, vector, cities,
  } = props;
  const map = { background: `url(${vector}) no-repeat center center/cover` };
  const dispatch = useDispatch();

  return (
    <Link to="/cities" onClick={() => dispatch(getCities(cities))} className={styles.wrapper}>
      <i className="right_arrow" />
      <i style={map} className={styles.map} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <span>{number}</span>
      </div>
    </Link>
  );
};

export default Country;

Country.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  vector: PropTypes.string.isRequired,
  cities: PropTypes.instanceOf(Array).isRequired,
};
