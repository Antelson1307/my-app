import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Index() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  function CheckLogin() {
    AsyncStorage.getItem("my-key").then((x) => {
      if (x == null) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
    });
    //setLoggedIn(true);
  }
  useEffect(CheckLogin);
  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <Link replace href="/login">
          <Text style={{ backgroundColor: "blue", padding: 15 }}>Login</Text>
        </Link>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Link href="/Home/">Home</Link>
        <Link href="/BarcodeScanners/">BarcodeScanner</Link>
        <Link href="/ParkingDetails/">ParkingDetails</Link>
        <Link href="/logout/">Logout</Link>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
