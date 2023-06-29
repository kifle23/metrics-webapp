import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';

const Details = () => {
  const weather = useSelector((state) => state.data.weather);

  return (
    <>
      <Header previous="cities" heading={`${weather.name} Weather`} />
      <Heading title={weather.name} />
      <section>
        <ul className="weather_deatils">
          <li className="weather_item">
            <span>{weather.weather[0].main}</span>
            <span>{weather.weather[0].description}</span>
          </li>
          <li>{`Wind Speed: ${weather.wind.speed} knots`}</li>
          <li>{`Temprature: ${weather.main.temp} K`}</li>
          <li>{`Pressure: ${weather.main.pressure}`}</li>
          <li>{`Humidity: ${weather.main.humidity}`}</li>
        </ul>
      </section>
    </>
  );
};

export default Details;
