import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetials } from '../../redux/detailsReducer/detailsReducer';
import style from './style.module.css';
import spareFlag from '../../assets/images/spareFalg.svg';
import arrow from '../../assets/images/arrow.svg';

function CountryItem(props) {
  const dispath = useDispatch();
  const { country, st } = props;
  const styleObj = {
    backgroundColor: st,
  };
  return (
    <div className={style.container} style={styleObj} data-testid="component-container">
      <Link onClick={() => dispath(getDetials(country.name))} className={style.link} to="/details">
        <img src={arrow} alt="arrow" data-testid="go-to-details" />
      </Link>

      <div>
        <img
          src={country.flag}
          alt="flag"
          onError={({ currentTarget }) => {
            const image = currentTarget;
            image.onerror = null;
            image.src = spareFlag;
          }}
        />
      </div>
      <h1>{country.name}</h1>
      <h2>
        {country.timezone}
      </h2>
    </div>
  );
}

CountryItem.propTypes = {
  country: PropTypes.objectOf(PropTypes.string).isRequired,
  st: PropTypes.string.isRequired,
};

export default CountryItem;
