import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import borrow from './navigation/screens/borrow.js'
import lender from './navigation/screens/lender.js'

function App (){
  return(
    <MainContainer>
    </MainContainer>
  )
}

export default App;

