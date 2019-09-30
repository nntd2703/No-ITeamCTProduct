import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class SuggestProductPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "600", fontSize: 18 }}>
            Có thể bạn sẽ thích
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {[1, 2, 3, 4].map(item => (
            <View style={{ marginVertical: 5 }} key={item}>
              <View style={styles.contentProduct}>
                <Image
                  source={{
                    url:
                      "https://cdn.chotot.com/PRHG7bNaeSsmcgE-GgDCfX-2_DgL6WX4Cr_Fxj1-XbA/preset:view/plain/c3cf5b926a5e74aafecef513606326d4-2633194785094572485.jpg"
                  }}
                  style={styles.image}
                ></Image>
                <View style={styles.details}>
                  <Text numberOfLines={2} style={styles.productName}>
                    Huawei P30 Pro
                  </Text>
                  <Text style={styles.time}>23 gio truoc</Text>
                  <Text style={styles.price}>20.000.000 đ</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.compareButton}>
                <MaterialIcons name="compare-arrows" size={25} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  compareButton: {
    backgroundColor: "#FFB900",
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 20
  },
  contentProduct: {
    marginTop: 20,
    marginLeft: 20,
    width: 130,
    borderWidth: 0.3,
    borderColor: "#E5E5E5",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  details: {
    marginHorizontal: 15,
    marginVertical: 10
  },
  productName: {
    fontSize: 14,
    fontWeight: "300"
  },
  time: {
    marginTop: 5,
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.7)"
  },
  price: {
    marginTop: 18,
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "600",
    fontSize: 15
  }
});
