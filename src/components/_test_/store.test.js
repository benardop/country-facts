import store from '../../redux/configureStore';
import { getCountries } from '../../redux/countries/countries';
import { getDetials } from '../../redux/detailsReducer/detailsReducer';

const iraq = {
  name: 'Iraq',
  capital: 'Baghdad',
  flag: 'https://flagcdn.com/iq.svg',
  timezone: 'UTC+03:00',
  region: 'Asia',
  population: 40222503,
  firstLanguage: 'Arabic',
  area: 438317,
  currencies: 'Iraqi dinar',
};

describe('test the store', () => {
  it('check if the store is initialy empty array', () => {
    expect(store.getState().countries).toEqual([]);
  });

  it('check if the store is populated after getCountries action is dispatched ', async () => {
    await store.dispatch(getCountries());
    expect(store.getState().countries.length).toBeGreaterThan(10);
  });
  it('check if the store is populated after getCountries action is dispatched ', async () => {
    await store.dispatch(getDetials('iraq'));
    expect(store.getState().details).toEqual(iraq);
  });
});
