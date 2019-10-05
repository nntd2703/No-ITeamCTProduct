import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import SlidePanel from "../components/SlidePanel";
import SearchPanel from "../components/SearchPanel";
import CategoryItem from "../components/CategoryItem";
import { fetchDataAPI } from "../utils/GetAPIFunction";
import { listCate, listFullPanel } from "../constants/ListCategory.js";
import { getPanelHomeScreen } from "../constants/UrlGetData";
import Constants from "expo-constants";
import ListCategoryComponent from "../components/ListCategoryComponent";
import SuggestProductPanel from "../components/SuggestProductPanel";
import SearchLayout from "../components/SearchLayout";
import UsersCategory from "../components/UsersCategory";
import { getSuggestProductUrl } from "../utils/FullApi";


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: listCate,
      listFullPanel,
      searchPanel: false,
      bookMarkList: []
    };
  }

  async fetchDataWithCateId(id) {
    if(id) {
      const data = await fetchDataAPI(`https://gateway.chotot.com/v1/public/ad-listing?region_v2=13000&cg=${id}&limit=10`);
      return data.ads;
    } else {
      console.log(getSuggestProductUrl)
      const data = await fetchDataAPI(getSuggestProductUrl);
      const suggestData = data.map(item => item.ad)
      return suggestData;
    }
  }

  async componentDidMount() {
    const listSlidePanel = await fetchDataAPI(getPanelHomeScreen);
    this.setState(
      {
        ...this.state,
        listSlidePanel: listSlidePanel.banners,
        bookMarkList: [
          {
            id: 1,
            title: "Dành cho bạn",
            data: await this.fetchDataWithCateId(null),
          },
          {
            id: 1010,
            title: "Nhà cho thuê",
            data: await this.fetchDataWithCateId(1010)
          }
        ]
      },
      () => {
        this._onFocusListener = this.props.navigation.addListener(
          "didFocus",
          async payload => {
            this.setState({
              bookMarkList: [
                {
                  id: 1,
                  title: "Dành cho bạn",
                  data: await this.fetchDataWithCateId(1010)
                },
                {
                  id: 1010,
                  title: "Nhà cho thuê",
                  data: await this.fetchDataWithCateId(1010)
                },
                {
                  id: 5010,
                  title: "Điện thoại",
                  data: await this.fetchDataWithCateId(5010)
                }
              ]
            });
          }
        );
      }
    );
  }

  returnData(itemCg) {
    console.log(itemCg);
  }

  handleOnClick = item => {
    this.props.navigation.navigate("CategoryDetail", {
      categoryChose: item,
      returnData: this.returnData.bind(this)
    });
  };

  handleSearchClick = () => () => {
    this.setState({
      searchPanel: true
    });
  };

  render() {
    const { listSlidePanel, searchPanel, bookMarkList } = this.state;
    const showOldVersion = false;
    const showDetails = (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <SlidePanel style={styles.slidePanel} data={listSlidePanel} />
        <View>
          {showOldVersion ? (
            <View>
              <View style={styles.categoryPanel}>
                {listFullPanel.map(item => (
                  <CategoryItem
                    handleOnClickCate={this.handleOnClick(item)}
                    key={item.id}
                    item={item}
                  />
                ))}
                <FlatList
                  data={this.state.categoryList}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                  columnWrapperStyle={{ justifyContent: "space-between" }}
                  renderItem={({ item }) => (
                    <CategoryItem
                      handleOnClickCate={this.handleOnClickCate(item)}
                      key={item.id}
                      item={item}
                    />
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          ) : (
            <View>
              <ListCategoryComponent
                handleOnClickCate={item => {
                  this.handleOnClick(item);
                }}
              />
            </View>
          )}  
          <View style={{ marginTop: 10, marginHorizontal: 10 }}>
            <SuggestProductPanel
              isCompareIcon={false}
              header="Các sản phẩm bạn đã xem"
              type="home"
              headerFontSize={15}
            />
          </View>
          <View style={{ margin: 10 }}>
            <UsersCategory bookMarkList={bookMarkList} />
          </View>
        </View>
      </ScrollView>
    );
    return (
      <View
        style={[styles.container, { marginTop: Constants.isDevice ? 20 : 30 }]}
      >
        <SearchPanel
          style={styles.searchPanel}
          type="HomeScreen"
          onSearchClick={this.handleSearchClick()}
          closeSearchLayout={() => {
            this.setState({
              searchPanel: false
            });
          }}
        />
        {searchPanel && (
          <View style={{ height: "100%" }}>
            <SearchLayout type="home" />
          </View>
        )}
        {showDetails}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6BA33",
    marginTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight
  },
  searchPanel: {
    flex: 1
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
  },
  scrollView: {
    flex: 9,
    backgroundColor: "white"
  },
  categoryPanel: {
    marginHorizontal: 10,
    backgroundColor: "white"
  },
  panelTwoCate: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
