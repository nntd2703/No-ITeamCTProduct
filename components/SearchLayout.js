import React from "react";
import { View, Text } from "react-native";

export default class SearchLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <Text>
          {" "}
          {this.props.type === "home" ? "Home Search" : "Cate Search"}{" "}
        </Text>
        <View>
          <Text>Danh mục của bạn </Text>
        </View>
      </View>
    );
  }
}
