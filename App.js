import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabNavigator from './navigation/MainTabNavigator';
import {
  createAppContainer
} from 'react-navigation';
const App = createAppContainer(MainTabNavigator);

export default App;


