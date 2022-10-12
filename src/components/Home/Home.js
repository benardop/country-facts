import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/countries/countries';
import CountryList from '../CountryList/CountryList';
import style from './Home.module.css';

function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [filter, setFilter] = useState(countries);
  const filterCountries = (e) => {
    const target = e.target.value;
    if (target === 'all') {
      setFilter(countries);
    } else {
      setFilter(countries.filter((el) => el.region === target));
    }
  };

  useEffect(
    () => { dispatch(getCountries()); setFilter(null); },
    [dispatch],
  );
  return (
    <div>
      <div className={style.dropDown}>
        <select
          name="drop-down"
          onChange={filterCountries}
        >
          <option value="all">All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <CountryList countries={filter || countries} />
    </div>
  );
}

export default Home;
