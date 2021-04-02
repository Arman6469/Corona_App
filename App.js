import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.content}>
          {/* Personal Information */}
          <View style={styles.personalInfo}>
            <View style={styles.avatar_container}>
              <Image
                style={styles.avatar}
                source={require("./assets/avatar.png")}
              />
            </View>
            <Text style={styles.subTitle}>User name and surname</Text>
            <Text style={styles.subText}>Test Date: 12.20.20</Text>
            <Text style={styles.normalText}>
              Test done by <Text style={styles.subTitle}>Company Name </Text>
            </Text>
          </View>

          {/* QR code  */}
          <View style={styles.qrCode_container}>
            <Image style={styles.qrCode} source={require("./assets/qr.png")} />
          </View>
          <Text style={styles.normalText}>
            Scan QR code to see the results in the site of {"\n"}
            <Text style={styles.subTitle}>National Health Operator</Text>
          </Text>

          {/* Test information */}

          <View style={styles.infoTitle_container}>
            <Text style={styles.subTitle}>Test Information</Text>
          </View>

          <View style={styles.testInformation_container}>
            <View style={styles.infoSample_container}>
              <Text style={styles.infoTitle}>Parameter</Text>
              <Text style={styles.infoText}>
                nCov-2019 RNA detection (RT PCR)
              </Text>
            </View>
            <View style={styles.infoSample_container}>
              <Text style={styles.infoTitle}>Sample</Text>
              <Text style={styles.infoText}>Nasoparyngeal swab</Text>
            </View>
            <View style={styles.infoSample_container}>
              <Text style={styles.infoTitle}>Result</Text>
              <View style={styles.result}>
                <Text style={styles.resultText}>Negative</Text>
              </View>
            </View>
          </View>

          {/* User Information */}
          <View style={styles.infoTitle_container}>
            <Text style={styles.subTitle}>User Information</Text>
          </View>
          <View style={styles.userInformation_container}>
            <View style={styles.userInfoSample_container}>
              <Text style={styles.infoTitle}>Passport</Text>
              <Text style={styles.infoText}>AA12345612</Text>
            </View>
            <View style={styles.userInfoSample_container}>
              <Text style={styles.infoTitle}>Date of Birth</Text>
              <Text style={styles.infoText}>12/13/1987</Text>
            </View>
            <View style={styles.userInfoSample_container}>
              <Text style={styles.infoTitle}>Phone</Text>
              <Text style={styles.infoText}>(097) 97-97-97</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingBottom: 20,
  },
  // Personal Information
  personalInfo: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  avatar_container: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  subTitle: {
    padding: 1.5,
    color: "#4f4f4f",
    fontSize: 15,
    fontWeight: "700",
  },
  normalText: {
    padding: 1.5,
    color: "#4f4f4f",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
  subText: {
    padding: 1.5,
    color: "#4f4f4f",
    fontSize: 11,
    fontWeight: "600",
  },

  // QR Code

  qrCode_container: {
    width: 180,
    height: 180,
    marginTop: 10,
  },
  qrCode: {
    width: "100%",
    height: "100%",
  },

  // Test Information

  testInformation_container: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
  },
  infoSample_container: {
    width: "100%",
    display: "flex",
    marginTop: 20,
  },
  infoTitle: {
    padding: 1.5,
    color: "#4f4f4f",
    fontSize: 12,
    fontWeight: "800",
  },
  infoText: {
    padding: 1.5,
    color: "#4f4f4f",
    fontSize: 14,
    fontWeight: "500",
  },

  result: {
    width: "100%",
    height: 30,
    marginTop: 10,
    backgroundColor: "#24f78c",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    padding: 1.5,
    color: "#4f4f4f",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 3,
    textTransform: "uppercase",
  },

  //  User Information

  infoTitle_container: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
  },

  userInformation_container: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  userInfoSample_container: {
    width: "50%",
    display: "flex",
    marginTop: 20,
  },
});
