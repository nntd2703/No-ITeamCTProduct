import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fetchDataAPI } from "../utils/GetAPIFunction";
import ItemDetails from "./ItemDetails";

const defaultCate = [
  {
    id: 1010,
    title: "Nhà Cho Thuê"
  },
  {
    id: 5010,
    mobile_brand: 1,
    mobile_model: 12,
    api:
      "https://gateway.chotot.com/v1/public/ad-listing?region_v2=13000&cg=5010&w=1&mobile_brand=1&mobile_model=12&limit=20&st=s,k"
  }
];

export default class UsersCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      idItemClicked: 1,
      loading: "true"
    };
  }

  fetchDataWithCateId(id) {
    const data = fetchDataAPI(
      `https://gateway.chotot.com/v1/public/ad-listing?region_v2=13000&cg=${id}&limit=20&st=u,h`
    );
    return data.ads;
  }

  componentDidMount() {}

  render() {
    const { bookMarkList } = this.props;
    console.log(bookMarkList);
    const { idItemClicked, loading } = this.state;
    return (
      <View>
        <View style={styles.groupHeader}>
          <View style={styles.header}>
            <Text> Của bạn </Text>
            <TouchableOpacity style={styles.editButton}>
              <MaterialCommunityIcons
                name="tag-remove"
                size={25}
                color="white"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.groupButton}>
            {bookMarkList.map(item => {
              if (item.id !== idItemClicked) {
                return (
                  <TouchableOpacity
                    style={[
                      styles.cateButton,
                      {
                        backgroundColor: "white",
                        borderColor: "#F6BA33"
                      }
                    ]}
                    key={item.id}
                    onPress={() => {
                      console.log(item.id);
                      this.setState({
                        idItemClicked: item.id
                      });
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.cateTitle,
                        {
                          color: "#F6BA33"
                        }
                      ]}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={[
                      styles.cateButton,
                      {
                        backgroundColor: "#F6BA33",
                        borderColor: "#F6BA33"
                      }
                    ]}
                    key={item.id}
                  >
                    <Text
                      numberOfLines={1}
                      style={[styles.cateTitle, { color: "white" }]}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
          <FlatList
            style={{ flex: 9.5 }}
            data={
              bookMarkList && bookMarkList.length > 0
                ? bookMarkList.find(details => details.id === idItemClicked)
                    .data
                : null
            }
            keyExtractor={item => item.ad_id.toString()}
            renderItem={({ item }) => (
              <ItemDetails
                data={item}
                //   handleViewProductDetails={this.handleItemClicked(
                //     item.list_id
                //   )}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cateTitle: {
    marginVertical: 8,
    marginHorizontal: 10,
    fontSize: 16
  },
  groupHeader: {
    borderBottomColor: "#808080",
    borderBottomWidth: 1
  },
  cateButton: {
    borderWidth: 0.75,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10
  },
  groupButton: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  editButton: {
    width: 40,
    height: 40,
    backgroundColor: "#F6BA33",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
