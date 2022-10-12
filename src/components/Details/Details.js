import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Details.module.css';
import { deleteDetails } from '../../redux/detailsReducer/detailsReducer';
import arrowImg from '../../assets/images/arrow.svg';

function Details() {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteDetails());
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [dispatch]);
  return (
    <div className={style.container} data-testid="details-container">
      <div className={style.top}>
        <img src={details.flag} alt="Flag" />
        <div className={style.name}>
          <h2>{details.name}</h2>
          <span>{details.timezone}</span>
        </div>

      </div>

      <div className={style.detail}>
        <span>Capital</span>
        <div>
          <span>{details.capital}</span>
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
      <div className={style.detail}>
        <span>Timezone</span>
        <div>
          <span>{details.timezone}</span>
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
      <div className={style.detail}>
        <span>population</span>
        <div>
          <span>{details.population}</span>
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
      <div className={style.detail}>
        <span>Formal Language</span>
        <div>
          <span>{details.firstLanguage}</span>
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
      <div className={style.detail}>
        <span>Area</span>
        <div>
          <span>{details.area}</span>
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
      <div className={style.detail}>
        <span>Currency</span>
        <div>
          <span>{details.currencies}</span>
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Details;
