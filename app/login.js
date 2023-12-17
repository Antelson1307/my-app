import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { router } from "expo-router";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [validPhone, setvalidPhone] = useState("");
  async function validatePhone() {
    setvalidPhone("");
    if (phone.length == 0) {
      setvalidPhone("Please enter phone number");
    }
    if (phone.length > 10) {
      setvalidPhone("Please enter valid phone number");
    }
    if (phone.length < 10) {
      setvalidPhone("Please enter valid phone number");
    }
    if (validPhone == "") {
      const url =
        "http://192.168.1.16:5140/api/Account/CreateAndLoginUser?phone=7373525829";
      var res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Accept-Language": "ru,en;q=0.9",
        },
      })
        .then((response) => response.json()) // returns promise
        .then((responseJson) => {
          //await AsyncStorage.setItem("my-key", "2");
          //alert(responseJson.responseObject.userId);
          router.replace("/home");
        });
    }
  }
  return (
    <View style={styles.container}>
      <Text>Login Page {phone}</Text>
      <TextInput
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="number-pad"
      ></TextInput>
      <Button title="Submit" onPress={validatePhone}></Button>
      <Text style={{ color: "red" }}>{validPhone}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
