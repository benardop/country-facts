import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CountryItem from '../CountryItem/CountryItem';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom';

it('Check if Item component has changed', () => {
  const country = {
    name: 'Iraq',
    capital: 'Bagdad',
    flag: 'https//flag',
    timezone: 'utc+1',
  };
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <CountryItem country={country} />
        ,
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check if the component container is there', async () => {
  const country = {
    name: 'Iraq',
    capital: 'Bagdad',
    flag: 'https//flag',
    timezone: 'utc+1',
  };
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CountryItem country={country} st="red" />
      </BrowserRouter>
    </Provider>,
  );
  const container = await screen.findByTestId('component-container');
  expect(container).toBeInTheDocument();
});
