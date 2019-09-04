import React from "react";
import { Platform, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MessageScreen from "../screens/MessageScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabBarIcon from "../components/TabBarIcon";
import CategoryDetailScreen from "../screens/CategoryDetailScreen";

const config = {
  headerMode: "none"
};

const CateDetailScreenStack = createStackNavigator(
  {
    CategoryDetail: CategoryDetailScreen
  },
  config
);

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    CateDetailScreenStack
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Đi chợ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-link"}
    />
  )
};

const CompleteStack = createStackNavigator({
  Complete: MessageScreen
});

CompleteStack.navigationOptions = {
  tabBarLabel: "Complete",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-done-all" : "md-link"}
    />
  )
};

CompleteStack.path = "";

const ActiveStack = createStackNavigator({
  Active: SettingsScreen
});

ActiveStack.navigationOptions = {
  tabBarLabel: "Active",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-today" : "md-link"}
    />
  )
};

ActiveStack.path = "";

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Active: ActiveStack,
    Complete: CompleteStack
  },
  {
    initialRouteName: "Home"
  }
);

export default MainTabNavigator;
