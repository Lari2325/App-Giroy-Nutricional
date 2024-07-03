import React from 'react';
import { StatusBar } from 'react-native';
import LoginViewmodels from './src/viewmodels/Login';
import colors from './src/views/Theme/colors';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
        
      />
      <LoginViewmodels />
    </NavigationContainer>
  );
}

export default App;