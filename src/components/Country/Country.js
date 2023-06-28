import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Country.css';
import { getCities } from '../../redux/weatherSlice';

const Country = ({ name, number, vector, cities }) => {
  const mapStyle = { background: `url(${vector}) no-repeat center center/cover` };
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getCities(cities));
  };

  return (
    <Link to="/cities" onClick={handleClick} className="wrapper">
      <i className="right_arrow" />
      <div className="map" style={mapStyle} />
      <div className="info">
        <h3>{name}</h3>
        <span>{number}</span>
      </div>
    </Link>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  vector: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Country;