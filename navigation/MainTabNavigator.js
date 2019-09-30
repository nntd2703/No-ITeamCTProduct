import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MessageScreen from "../screens/MessageScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabBarIcon from "../components/TabBarIcon";
import CategoryDetailScreen from "../screens/CategoryDetailScreen";
import DetailsProductScreen from "../screens/DetailsProductScreen";

const config = {
  headerMode: "none"
};

const DetailsProductScreenStack = createStackNavigator(
  {
    DetailsProduct: DetailsProductScreen
  },
  {
    headerMode: "none",
    tabBarVisible: false
  }
);

const CateDetailScreenStack = createStackNavigator(
  {
    CategoryDetail: CategoryDetailScreen
  },
  config
);

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    CateDetailScreenStack,
    DetailsProductScreenStack
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

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;
  console.log(routeName)
  if (routeName == "DetailsProductScreenStack") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
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
  tabBarLabel: "Test Screen",
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
    Complete: CompleteStack,
    Details: DetailsProductScreenStack
  },
  {
    initialRouteName: "Active"
  }
);

export default MainTabNavigator;
