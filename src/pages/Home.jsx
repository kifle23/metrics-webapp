import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Country from '../components/Country/Country';
import Heading from '../components/Heading/Heading';

const Home = () => {
  const countries = useSelector((state) => state.updateCountries);

  return (
    <>
      <Header previous="" heading="Weather" />
      <section>
        <Heading home title="Metrics | Weather" />
        <div className="countries">
          { countries.map((country) => (
            <Country
              key={country.name}
              number={country.cities.length}
              name={country.name}
              vector={country.map}
              cities={country.cities}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
