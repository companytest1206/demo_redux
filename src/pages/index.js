import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from './MainPage';
import SecondPage from './SecondPage';

const App = () => (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} hideNavBar/>
        <Scene key="SecondPage" component={SecondPage} />
      </Stack>
    </Router>
  );

export default App;
