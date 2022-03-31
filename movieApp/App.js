import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/routers';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Root from './src/routers';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
