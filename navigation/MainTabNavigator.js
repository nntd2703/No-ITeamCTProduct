import React from "react";
import { Platform, View, Text } from "react-native";
import { Constants } from 'expo'

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation-tabs";
import MessageScreen from "../screens/MessageScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const MainTabNavigator = createBottomTabNavigator({
  Link: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      headerTitle: "Home",
      tabBarLabel: "Đi chợ",
    }
  },
  Message: { screen: MessageScreen },
  Settings: { screen: SettingsScreen }
});

export default MainTabNavigator;
