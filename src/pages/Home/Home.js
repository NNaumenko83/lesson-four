import { useSelector } from 'react-redux';
import { getCurrencyValue } from 'redux/filterSlice';
import { useGetCurrencyQuery } from 'redux/exchangesApi';

const arrCurrency = ['UAH', 'USD', 'EUR'];

const Home = () => {
  const currency = useSelector(getCurrencyValue);
  console.log('currency:', currency);

  const filteredCurrency = arrCurrency
    .filter(item => item !== currency)
    .join(',');
  console.log('Home ~ filteredCurrency:', filteredCurrency);
  const exchange = useGetCurrencyQuery({
    symbols: filteredCurrency,
    base: currency,
  });

  console.log('exchange:', exchange);

  return <h2>Hello and welcome to our phonebook website! </h2>;
};
export default Home;
