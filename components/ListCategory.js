import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { listCate } from "../constants/ListCategory";

export default class ListCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(listCate)
    return (
      <View style={styles.container}>
        <FlatList
          data={listCate}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.cateButton,
                {
                  backgroundColor: "#4CD964"
                }
              ]}
            >
              <Text numberOfLines={2} style={styles.cateHeader}>
                {item.title}
              </Text>
              <Image
                source={{
                  uri: item.newImageLink
                }}
                style={styles.cateImage}
                resizeMode="contain"
              ></Image>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  cateButton: {
    backgroundColor: "#4CD964",
    borderRadius: 15,
    margin: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "47%",
    height: 100
  },
  cateHeader: {
    paddingTop: 7,
    paddingLeft: 10,
    flex: 1,
    fontSize: 18,
    color: "#FFFFFF"
  },
  cateImage: {
    width: 90,
    height: 70,
    marginTop: 20,
    flex: 0
  }
});
