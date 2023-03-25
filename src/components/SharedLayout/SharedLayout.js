import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';

import { currencyChange } from 'redux/filterSlice';

export const SharedLayout = () => {
  const [currency, setCurrency] = React.useState(
    navigator.language === 'uk' ? 'UAH' : 'USD'
  );

  const dispatch = useDispatch();

  const handleChange = event => {
    setCurrency(event.target.value);
    dispatch(currencyChange(event.target.value));
  };

  console.log(navigator.language);

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/exchange">Exchange</Link>
        <Box sx={{ width: 120, marginTop: '10px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Currency"
              onChange={handleChange}
            >
              <MenuItem value={'UAH'}>UAH</MenuItem>
              <MenuItem value={'EUR'}>EUR</MenuItem>
              <MenuItem value={'USD'}>USD</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
