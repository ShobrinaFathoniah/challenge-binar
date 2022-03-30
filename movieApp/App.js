import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/routers';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
