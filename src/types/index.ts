export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
  alpha3Code: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface CountryDetails {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  flags: {
    svg: string;
    png: string;
  };
  alpha3Code: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  borders: string[];
}
