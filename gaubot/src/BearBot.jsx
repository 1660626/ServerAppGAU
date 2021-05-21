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
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    //  console.log({ token });
    return token;
  }
  const [tokenStore, settokenStore] = useState(undefined);
  return (
    <View>
      <Header
        centerComponent={{ text: "🌈 👇 Gấu 👇 🌈", style: { color: "#fff" } }}
      />
      <View style={styles.container}>
        {tokenStore ? (
          <View>
            <Text style={styles.heading}>
              {`Mã số của bạn là ${tokenStore}.\n`}
              Hãy đợi gấu triệu hồi bạn :V
            </Text>
            <Button
              title="Bấm thoát kết nối với gấu"
              onPress={() => {
                settokenStore(undefined);
              }}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.heading}>
              Bạn chưa có mã số để triệu hồi :v Vui lòng bấm để lấy số.
            </Text>
            <Button
              title="Bấm để lấy mã số"
              onPress={async () => {
                // getNotificationToken();
                const token = await getNotificationToken();
                if (token) {
                  const storedToken = await submitToken(token);
                  console.log(storedToken);
                  settokenStore(storedToken);
                }
              }}
            />
          </View>
        )}
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
    padding: 50,
  },
});

export default BearBot;
