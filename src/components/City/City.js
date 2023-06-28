import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './City.css';
import { fetchWeather } from '../../redux/weather';

const City = (props) => {
  const { title, lat, long } = props;
  const dispatch = useDispatch();

  return (
    <Link onClick={() => dispatch(fetchWeather({ lat, long }))} to="/details" className={styles.city}>
      <span>{title}</span>
      <div className={styles.info}>
        <span>AQI: 1</span>
        <i className="right_arrow" />
      </div>
    </Link>
  );
};

export default City;

City.propTypes = {
  title: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
  long: PropTypes.string.isRequired,
};
