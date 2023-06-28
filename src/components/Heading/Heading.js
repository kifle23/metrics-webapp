import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Heading.css';
import { filterCountries } from '../../redux/weatherSlice';

const Heading = ({ title, number, home }) => {
  const dispatch = useDispatch();

  const regions = [
    { name: 'Africa', value: 'africa' },
    { name: 'Asia', value: 'asia' },
    { name: 'Europe', value: 'europe' },
    { name: 'North America', value: 'north-america' },
    { name: 'Oceania', value: 'oceania' },
    { name: 'South America', value: 'south-america' },
  ];

  const handleFilterChange = (event) => {
    dispatch(filterCountries(event.target.value));
  };

  return (
    <div className="heading">
      <h1>{title}</h1>

      {home ? (
        <select className="filter" defaultValue="all" onChange={handleFilterChange}>
          <option value="all" disabled>
            __Filter Countries by Region__
          </option>
          {regions.map((region) => (
            <option key={region.value} value={region.value}>
              {region.name}
            </option>
          ))}
        </select>
      ) : (
        <span>{number}</span>
      )}
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.bool,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Heading.defaultProps = {
  home: false,
  number: '',
};

export default Heading;
