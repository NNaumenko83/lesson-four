import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Exchange = lazy(() => import('pages/Contacts/Exchange'));

// const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
