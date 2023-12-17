import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Logout() {
  const clearStorage = async () => {
    await AsyncStorage.removeItem("my-key");
  };
  function LogoutUser() {
    clearStorage();
    router.replace("/login");
  }
  useEffect(LogoutUser);
  return (
    <View style={styles.container}>
      <Text>Logout Page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
