import store from '../../redux/configureStore';
import { getCountries } from '../../redux/countries/countries';
import { getDetials } from '../../redux/detailsReducer/detailsReducer';

const kenya = {
  name: 'Kenya',
  capital: 'Nairobi',
  flag: 'https://flagcdn.com/ke.svg',
  timezone: 'UTC+03:00',
  region: 'Africa',
  population: 53771300,
  firstLanguage: 'English',
  area: 580367,
  currencies: 'Kenyan shilling',
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
    await store.dispatch(getDetials('kenya'));
    expect(store.getState().details).toEqual(kenya);
  });
});
