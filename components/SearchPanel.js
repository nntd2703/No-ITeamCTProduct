import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text, Keyboard } from "react-native";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchBar = props => {
  return (
    <View style={[props.searchSection, props.customSearchSection]}>
      <Ionicons
        name="ios-search"
        size={25}
        color="#F6BA33"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm trên Chợ Tốt"
        placeholderTextColor="#F6BA33"
        onChangeText={searchString => {
          console.log(searchString);
        }}
        underlineColorAndroid="transparent"
        onFocus={props.onSearchClick}
      />
    </View>
  );
};

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCloseButton: false,
      isMark: false
    };
  }

  render() {
    const {
      type,
      onSearchClick,
      closeSearchLayout,
      bookmarkCategory
    } = this.props;
    const { isMark } = this.state;
    const closeButton = this.state.isShowCloseButton ? (
      <TouchableOpacity
        onPress={() => {
          this.setState(
            {
              isShowCloseButton: false
            },
            () => {
              Keyboard.dismiss();
              closeSearchLayout();
            }
          );
        }}
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlignVertical: "center",
            marginVertical: 15
          }}
        >
          Đóng
        </Text>
      </TouchableOpacity>
    ) : null;
    console.log("isMark", isMark);
    const isMarkIcon = isMark ? (
      <FontAwesome
        name="bookmark"
        size={30}
        color="white"
        style={styles.markerIcon}
      />
    ) : (
      <Feather
        name="bookmark"
        size={30}
        color="white"
        style={styles.markerIcon}
      />
    );
    return (
      <View style={styles.container}>
        {type === "HomeScreen" ? (
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={[styles.searchSection, styles.customSearchSection]}>
              <Ionicons
                name="ios-search"
                size={25}
                color="#F6BA33"
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Tìm kiếm trên Chợ Tốt"
                placeholderTextColor="#F6BA33"
                onChangeText={searchString => {
                  console.log(searchString);
                }}
                underlineColorAndroid="transparent"
                onFocus={() => {
                  this.setState(
                    {
                      isShowCloseButton: true
                    },
                    () => {
                      onSearchClick();
                    }
                  );
                }}
              />
            </View>
            {closeButton}
          </View>
        ) : (
          <View style={styles.detailContainer}>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => {
                this.props.goBack();
              }}
            >
              <Ionicons name="ios-arrow-round-back" size={35} color="white" />
            </TouchableOpacity>
            <View style={[styles.searchSection, styles.customSearchSection]}>
              <Ionicons
                name="ios-search"
                size={25}
                color="#F6BA33"
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Tìm kiếm trên Chợ Tốt"
                placeholderTextColor="#F6BA33"
                onChangeText={searchString => {
                  console.log(searchString);
                }}
                underlineColorAndroid="transparent"
                onFocus={() => {
                  this.setState(
                    {
                      isShowCloseButton: true
                    },
                    () => {
                      onSearchClick();
                    }
                  );
                }}
              />
            </View>
            {closeButton ? (
              closeButton
            ) : (
              <TouchableOpacity
                onPress={() => {
                  this.setState(
                    {
                      isMark: !isMark
                    },
                    () => {
                      bookmarkCategory(this.state.isMark);
                    }
                  );
                }}
                style={{
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 55
                }}
              >
                {isMarkIcon}
              </TouchableOpacity>
            )}
          </View>
        )}
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    borderBottomColor: "#F6BA33",
    borderBottomWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 5
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  backIcon: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    width: 40
  },
  markerIcon: {},
  customSearchSection: {
    flex: 7,
    marginHorizontal: 0,
    marginRight: 10
  },
  searchIcon: {
    padding: 10,
    flex: 1
  },
  input: {
    flex: 5.5,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "#F6BA33",
    fontSize: 20
  }
});
