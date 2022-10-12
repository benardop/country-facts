import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Details.module.css';
import { deleteDetails } from '../../redux/detailsReducer/detailsReducer';

function Details() {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteDetails());
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [dispatch]);
  return (
    <div className={style.container}>
      <img src={details.flag} alt="Flag" />
      <h2>{details.name}</h2>
      <div>
        <span>Capitel</span>
        {' '}
        <span>:</span>
        {' '}
        <span>{details.name}</span>
      </div>
      <div>
        <span>Timezone</span>
        {' '}
        <span>:</span>
        {' '}
        <span>{details.timezone}</span>
      </div>
      <div>
        <span>population</span>
        {' '}
        <span>:</span>
        {' '}
        <span>{details.population}</span>
      </div>
      <div>
        <span>Formal Language</span>
        {' '}
        <span>:</span>
        {' '}
        <span>{details.firstLanguage}</span>
      </div>
      <div>
        <span>Area</span>
        {' '}
        <span>:</span>
        {' '}
        <span>{details.area}</span>
      </div>
      <div>
        <span>Currency</span>
        {' '}
        <span>:</span>
        {' '}
        <span>{details.currencies}</span>
      </div>
    </div>
  );
}

export default Details;
