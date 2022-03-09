import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import Router from './router';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App