import React from 'react';
import PropTypes from 'prop-types';
import CountryItem from '../CountryItem/CountryItem';
import style from './style.module.css';

function CountryList(props) {
  const { countries } = props;
  return (
    <div className={style.container}>
      {countries.map((el, index) => <CountryItem country={el} key={el.name} st={index % 2 === 0 ? 'rgb(65,104,177)' : 'rgb(63,98,166)'} />)}
    </div>
  );
}
CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default CountryList;
