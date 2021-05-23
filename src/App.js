import React from 'react';
import { Route } from 'react-router';
import MainPageContainer from './components/MainPage/MainPageContainer';
import VideoContainer from './components/Video/VideoContainer';

const App = () => {
  return (
    <div>
      <Route exact path="/" render={() => <MainPageContainer />} />
      <Route exact path="/video/:id" render={() => <VideoContainer />} />

    </div>
  );
};

export default App;