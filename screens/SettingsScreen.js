import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListCategory from '../components/ListCategory';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Test Screen </Text>
        <ListCategory/>
      </View>
    );
  }
}
