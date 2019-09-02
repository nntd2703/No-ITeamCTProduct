import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <Ionicons
            name="ios-search"
            size={25}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm trên Chợ Tốt"
            placeholderTextColor="grey"
            onChangeText={searchString => {
              this.setState({ searchString });
            }}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6BA33",
    paddingBottom: 4
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  searchIcon: {
    padding: 10
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#F6BA33",
    color: "#424242",
    fontSize: 20
  }
});
