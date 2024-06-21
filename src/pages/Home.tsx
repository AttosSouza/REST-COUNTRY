import React from 'react';
import { Header } from '../components/header';
import Dropdown from '../components/Dropdown';
import fetchData from '../utils/fetchData';
import SearchBar from '../components/Searchbar';
import CountryList from '../components/CountryList';
import { Country } from '../types/index.ts';

const Home = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (!selectedRegion || country.region === selectedRegion),
  );

  React.useEffect(() => {
    const loadCountries = async () => {
      setIsLoading(true);
      const data = await fetchData('/data.json');
      setCountries(data || []);
      setIsLoading(false);
    };
    loadCountries();
  }, []);

  return (
    <main>
      <Header />
      <div className="mt-[9.375rem] mx-10 flex justify-between items-center max-md:flex-col max-md:items-start">
        <SearchBar value={searchValue} onChange={handleInputChange} />
        <Dropdown
          options={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
          onOptionSelected={setSelectedRegion}
        />
      </div>
      <div className="mt-[6.25rem] mx-10 flex flex-wrap justify-between max-md:justify-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <CountryList countries={filteredCountries} />
        )}
      </div>
    </main>
  );
};

export default Home;
