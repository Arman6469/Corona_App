import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { StyleSheet, View, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../assets/unnamed.png")} />
      </View>
      <View style={styles.menu_container}>
       <FontAwesomeIcon icon={faBars} size={18} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(2, 4, 8, 0.31)',

  },
  logo_container: {
    width: "50%",
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  logo: {
  width: 170,
  height: 33
  },
  menu_container: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: "flex-end",
    justifyContent: 'center',
    paddingRight: 20,
    paddingBottom: 10,
  },
});
