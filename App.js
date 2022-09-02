
import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Navigation } from 'react-native-navigation';
import NavigationStack from './src/navigation/NavigationStack'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationStack />
  );
};

export default App;
