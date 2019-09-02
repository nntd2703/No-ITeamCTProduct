import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
  Dimensions
} from "react-native";
const url = "https://static.chotot.com.vn/storage/marketplace/home/category/";

const ImageBg = props => {
  return (
    <ImageBackground
      source={{ uri: `${url}${props.imageName}` }}
      style={props.styleImageBackGround}
    >
      <Text style={styles.cateTitle}>{props.title}</Text>
    </ImageBackground>
  );
};

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    let width = Dimensions.get("window").width - 20;
    if (item.type !== "fullPanel") {
      width = (width / 2) - 5;
    }
    let styleImageBackGround = {
      alignSelf: "stretch",
      width: width,
      resizeMode: "contain",
      height: 100
    };
    return (
      <View style={styles.container}>
        <ImageBg
          styleImageBackGround={styleImageBackGround}
          imageName={item.imageName}
          title={item.title}
        ></ImageBg>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  cateTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    paddingTop: 7,
    paddingLeft: 10
  }
});
