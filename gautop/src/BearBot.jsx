import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header, Input, Button } from "react-native-elements";
import * as Notifications from "expo-notifications";
import { submitToken } from "../services/api";

function BearBot() {
  async function getNotificationToken() {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
    }
    // const token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log({ token });
    // return token;
  }
  const [tokenStore, settokenStore] = useState(undefined);
  return (
    <View>
      <Header
        centerComponent={{ text: "🌈 👇 Gấu 👇 🌈", style: { color: "#fff" } }}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>
            {tokenStore
              ? `Mã số của bạn là ${tokenStore}.`
              : "Bạn chưa có mã số bấm nút để lấy mã"}
          </Text>
        </View>
        <Button
          title="Bấm để lấy mã số"
          onPress={async () => {
            getNotificationToken();
            // const token = await getNotificationToken();
            // if (token) {
            //   const storedToken = await submitToken(token);
            //   console.log(storedToken)
              settokenStore(1621527508990);
            // }
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "bold",
    width: "100%",
    color: "#CB4335",
  },
  container: {
    padding: 100,
  },
});

export default BearBot;
