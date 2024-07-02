import React from 'react';
import { StatusBar } from 'react-native';
import LoginViewmodels from './src/viewmodels/Login';
import colors from './src/views/Theme/colors';

function App() {
  return (
    <>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
        
      />
      <LoginViewmodels />
    </>
  );
}

export default App;