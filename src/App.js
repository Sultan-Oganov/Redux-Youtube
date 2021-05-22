import React from 'react';
import { Route } from 'react-router';
// import MainPage from './components/MainPage/MainPage';
import MainPageContainer from './components/MainPage/MainPageContainer';

const App = () => {
  return (
    <div>
      <Route path="/" render={() => <MainPageContainer />} />

    </div>
  );
};

export default App;