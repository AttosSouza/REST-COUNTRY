import React from 'react';
import { Link } from 'react-router-dom';
import { Country } from '../types';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => (
  <Link to={`/country/${country.alpha3Code}`}>
    <div className="shadow-lg w-[400px] h-auto mb-9 max-md:w-auto">
      <img
        src={country.flags.png}
        alt={`${country.name} flag`}
        className="w-full h-[200px]"
      />
      <div className="px-5 py-6">
        <h2 className="font-nunito font-bold mb-5 text-xl">{country.name}</h2>
        <p>
          <span className="font-nunito font-bold">Population: </span>
          {country.population.toLocaleString()}
        </p>
        <p>
          <span className="font-nunito font-bold">Region:</span>{' '}
          {country.region}
        </p>
        <p>
          <span className="font-nunito font-bold">Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  </Link>
);

export default CountryCard;
