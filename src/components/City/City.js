import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './City.css';
import { fetchWeather } from '../../redux/weatherSlice';

const City = ({ title, lat, long }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchWeather({ lat, long }));
  };

  return (
    <Link to="/details" onClick={handleClick} className="city">
      <span>{title}</span>
    </Link>
  );
};

City.propTypes = {
  title: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
};

export default City;