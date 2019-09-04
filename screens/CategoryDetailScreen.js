import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import SearchPanel from "../components/SearchPanel";
import FilterParentPanel from "../components/FilterParentPanel";

export default class CategoryDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.state.params.categoryChose
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchPanel type="cateDetail" />
        <ScrollView style={styles.scrollView}>
          <FilterParentPanel style={{ flex: 0.5 }}></FilterParentPanel>
          <Text style={{ flex: 9.5 }}> CategoryDetailScreen </Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight
  },
  scrollView: {
    flex: 9,
    backgroundColor: "white"
  }
});
