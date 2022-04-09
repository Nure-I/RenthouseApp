import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ListItem } from "./../../components";
import {
  fonts,
  colors,
  IL_House_01,
  IL_House_02,
  IL_House_03,
  IL_House_05,
  IL_House_04,
} from "../../res";
import { IC_Search } from "../../res/images/Icon";
// import { IL_House_01 } from "../../../res"
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header />
        {/* welcoming text*/}
        <View style={styles.wrapperwelcome}>
          <Text style={styles.textWelcome}>Find</Text>
          <Text style={styles.textWelcome}>Your Dream Home</Text>
        </View>
        {/* search section */}
        <View style={styles.wrapperSearch}>
          <View style={styles.wrapperTxtInput}>
            <TextInput
              placeholder="Find your dream home"
              style={styles.txtInput}
            />
            {/* btn search */}
            <View style={styles.wrapperBtnSearch}>
              <TouchableOpacity>
                <IC_Search />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Content */}
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.wrapperContent}
          >
            <ListItem
              type="main"
              name="Modern House"
              city="Adama"
              image={IL_House_01}
              onPress={() => {
                navigation.navigate("Detail");
              }}
            />
            <ListItem
              type="main"
              name="White House"
              city="Addis Abeba"
              image={IL_House_02}
            />
            <ListItem
              type="main"
              name="Wooden House"
              city="Bahr Dar"
              image={IL_House_03}
            />
          </ScrollView>
          {/* Recomended section */}
          <View style={styles.wrapperRecomend}>
            <Text style={styles.textTitleRecomend}>Recomended For You</Text>
            <ListItem
              name="Wooden House"
              city="Arba Minch"
              image={IL_House_05}
            />
            <ListItem
              name="Triangle House"
              city="Dire Dawa"
              image={IL_House_03}
            />
            <ListItem name="Hill House" city="Gondar" image={IL_House_04} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "white" },
  wrapperwelcome: {
    paddingHorizontal: 20,
  },
  textWelcome: {
    fontSize: 30,
    fontFamily: fonts.SemiBold,
  },
  wrapperSearch: {
    paddingHorizontal: 20,
    marginTop: 30,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  wrapperTxtInput: {
    flexDirection: "row",
    backgroundColor: colors.white,
    height: 55,
    width: "100%",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  txtInput: { fontSize: 14, fontFamily: fonts.Regular },
  wrapperBtnSearch: {
    backgroundColor: colors.primary,
    height: 39,
    width: 39,
    borderRadius: 39 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperRecomend: { marginTop: 30, paddingHorizontal: 20 },
  textTitleRecomend: { fontSize: 16, fontFamily: fonts.SemiBold },
  wrapperContent: {
    marginTop: 30,
    paddingLeft: 20,
    flexDirection: "row",
    paddingVertical: 10,
  },
});
