import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/header';
import { CountryDetails } from '../types';

const Country = () => {
  const [countryDetails, setCountryDetails] = useState<CountryDetails | null>(
    null,
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/public/data.json');
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data: CountryDetails[] = await response.json();
        const country = data.find((item) => item.alpha3Code === id);
        setCountryDetails(country ?? null);
        setIsLoading(false);
      } catch (err) {
        console.error('fetchData:', err);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (countryDetails)
    return (
      <main>
        <Header />
        <div className="mt-60 mx-10 flex items-center gap-40 flex-wrap">
          <img
            src={countryDetails.flag}
            alt={`${countryDetails.name} flag`}
            className="w-[600px] h-[400px]"
          />
          <div className="country-info">
            <h1 className="font-nunito font-bold text-4xl">
              {countryDetails.name}
            </h1>
            <div className="mt-10 w-[600px] flex justify-between flex-wrap max-md:w-full">
              <div className="flex flex-col gap-3">
                <p>
                  <span className="font-nunito font-bold">Native Name:</span>{' '}
                  {countryDetails.nativeName}
                </p>
                <p>
                  <span className="font-nunito font-bold">Population:</span>{' '}
                  {countryDetails.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-nunito font-bold">Region: </span>
                  {countryDetails.region}
                </p>
                <p>
                  <span className="font-nunito font-bold">Sub Region:</span>{' '}
                  {countryDetails.subregion}
                </p>
                <p>
                  <span className="font-nunito font-bold">Capital:</span>{' '}
                  {countryDetails.capital}
                </p>
              </div>
              <div className="flex flex-col gap-3 max-md:mt-3">
                <p>
                  <span className="font-nunito font-bold">
                    Top Level Domain:{' '}
                  </span>
                  {countryDetails.topLevelDomain.join(', ')}
                </p>
                <p>
                  <span className="font-nunito font-bold">Currencies:</span>{' '}
                  {countryDetails.currencies.map((c) => c.name).join(', ')}
                </p>
                <p>
                  <span className="font-nunito font-bold">Languages:</span>{' '}
                  {countryDetails.languages.map((l) => l.name).join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
};

export default Country;
