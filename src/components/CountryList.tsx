import React from 'react';
import CountryCard from './CountryCard';
import { Country } from '../types';

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => (
  <div className="flex flex-wrap justify-between max-md:justify-center">
    {countries.map((country) => (
      <CountryCard key={country.alpha3Code} country={country} />
    ))}
  </div>
);

export default CountryList;
