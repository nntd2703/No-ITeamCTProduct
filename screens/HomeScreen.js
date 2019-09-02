import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";
import SlidePanel from "../components/SlidePanel";
import SearchPanel from "../components/SearchPanel";
import CategoryItem from "../components/CategoryItem";
import { fetchDataAPI } from "../utils/GetAPIFunction";
const listFullPanel = [
  {
    id: 1,
    imageName: "cho-tot-nha.png",
    title: "Bất Động Sản",
    type: "fullPanel"
  },
  {
    id: 2,
    imageName: "cho-tot-xe.png",
    title: "Xe cộ",
    type: "fullPanel"
  }
];
const listCate = [
  {
    id: 3,
    imageName: "do-dien-tu.png",
    title: "Đồ điện tử"
  },
  {
    id: 4,
    imageName: "viec-lam.png",
    title: "Việc làm"
  },
  {
    id: 5,
    imageName: "thu-cung.png",
    title: "Thú Cưng"
  },
  {
    id: 6,
    imageName: "noi-ngoai-that.png",
    title: "Nội ngoại thất, Đồ gia dụng"
  },
  {
    id: 7,
    imageName: "me-va-be.png",
    title: "Mẹ và bé"
  },
  {
    id: 8,
    imageName: "giai-tri-the-thao-so-thich.png",
    title: "Giải trí, Thể thao, Sở thích"
  },
  {
    id: 9,
    imageName: "thoi-trang-do-dung-ca-nhan.png",
    title: "Thời trang, đồ dùng cá nhân"
  },
  {
    id: 10,
    imageName: "do-van-phong.png",
    title: "Đồ văn phòng, Công nông nghiệp"
  },
  {
    id: 11,
    imageName: "dich-vu-du-lich.png",
    title: "Dịch vụ, Du lịch"
  },
  {
    id: 12,
    imageName: "cac-loai-khac.png",
    title: "Các loại khác"
  },
  {
    id: 13,
    imageName: "cho-tang-mien-phi.png",
    title: "Cho tặng miễn phí"
  },
  {
    id: 14,
    imageName: "tat-ca-danh-muc.png",
    title: "Tất cả danh mục"
  }
];

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: listCate,
      listFullPanel
    };
  };

  async componentDidMount() {
    const listSlidePanel = await fetchDataAPI(`https://gateway.chotot.com/v1/public/buyer-collection/banners`);
    this.setState({
      ...this.state,
      listSlidePanel: listSlidePanel.banners,
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    const { listSlidePanel } = this.state;
    return (
      <View style={styles.container}>
        <SearchPanel style={styles.searchPanel} />
        <ScrollView style={styles.scrollView}>
          <SlidePanel style={styles.slidePanel} data={listSlidePanel} />
          <View style={styles.categoryPanel}>
            {listFullPanel.map(item => (
              <CategoryItem key={item.id} item={item} />
            ))}
            <FlatList
              data={this.state.categoryList}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              renderItem={({ item }) => (
                <CategoryItem
                  key={item.id}
                  item={item}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
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
