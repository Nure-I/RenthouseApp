import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  colors,
  fonts,
  IC_Call,
  IC_Chat,
  IC_Star,
  IC_Star_Half,
  IL_BedRoom,
  IL_Garage,
  IL_House_01,
  IL_Pool,
  IL_User_01,
} from "../../res";
import { Button, Gap, Header, ListItem } from "../../components";

const Detail = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView>
        {/* Header */}
        <Header
          type="transparent-with-back"
          onPress={() => navigation.goBack()}
        />
        {/* Image */}
        <Image
          source={IL_House_01}
          style={{
            height: 300,
            width: "100%",
            resizeMode: "stretch",
            zIndex: -1,
          }}
        />
        {/* Content */}
        <View
          style={{
            top: -50,
            width: "100%",
            backgroundColor: colors.white,
            zIndex: 99,
            bottom: 0,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          {/* Section Name */}
          <View
            style={{
              flexDirection: "row",
              padding: 20,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontFamily: fonts.SemiBold }}>
                Modern House
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.Regular,
                  color: colors.grey,
                }}
              >
                Adama Oromia, Ethiopia
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <IC_Star />
              <IC_Star />
              <IC_Star />
              <IC_Star />
              <IC_Star_Half />
            </View>
          </View>
          {/* Section Agent */}
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 14, fontFamily: fonts.SemiBold }}>
              Listing Agent
            </Text>

            <View
              style={{
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={IL_User_01}
                style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
              />
              <View style={{ flex: 1, paddingLeft: 15 }}>
                <Text style={{ fontSize: 14, fontFamily: fonts.Medium }}>
                  Leyla Kemal
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: fonts.Regular,
                    color: colors.grey,
                  }}
                >
                  House Owner
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  <IC_Chat />
                </TouchableOpacity>
                {/* <Gap width={5} height={0} /> */}
                <TouchableOpacity>
                  <IC_Call />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* House facilities */}
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontFamily: fonts.SemiBold,
                fontSize: 14,
                paddingLeft: 20,
              }}
            >
              House Facilities
            </Text>
            {/* house facilities item */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                paddingLeft: 20,
                paddingVertical: 10,
              }}
            >
              <ListItem
                type="facility-item"
                image={IL_Pool}
                name="Swimming Pool"
              />
              <ListItem
                type="facility-item"
                image={IL_BedRoom}
                name="4 Bedroom"
              />
              <ListItem type="facility-item" image={IL_Garage} name="Garage" />
            </ScrollView>
          </View>
          {/* description */}
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 14, fontFamily: fonts.SemiBold }}>
              Description
            </Text>
            <Text
              style={{
                fontFamily: fonts.Regular,
                color: colors.grey,
                fontSize: 12,
              }}
            >
              Luxury homes at affordable prices with Adama hot atmosphere.
              Located in a strategic location, flood free.
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* Book */}
      <View
        style={{ height: 100, width: "100%", position: "absolute", bottom: 0 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.SemiBold,
                color: colors.grey,
              }}
            >
              Price
            </Text>
            <Text
              style={{
                fontFamily: fonts.Bold,
                fontSize: 20,
                color: colors.primary,
              }}
            >
              $7,500
            </Text>
          </View>
          {/* button */}
          <Button text="Book Now" />
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
