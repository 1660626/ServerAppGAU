import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header, Input, Button } from "react-native-elements";
import { getToken, sendPushNoti } from "../services/api";

const styles = StyleSheet.create({
  containerBox: {
    marginTop: 50,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "bold",
    width: "100%",
    color: "#CB4335",
  },
  container: {
    padding: 40,
  },
});
export default function BearTop() {
  const [category, setcategory] = useState({
    categes: [
      {
        cat_id: "1",
        cat_name: "🥺 Anh đói quá à 🥺",
        backgroundcolor: "#3498DB",
        cat_body: "Em ơi anh đói quá, anh ăn em được hem",
      },
      {
        cat_id: "2",
        cat_name: "🤪🧃 Anh thèm trà sữa 🧃🤪",
        backgroundcolor: "#E74C3C",
        cat_body: "Anh thèm trà và sữa của em ",
      },
      {
        cat_id: "3",
        cat_name: "👨‍❤️‍💋‍👨❤️‍🔥 Anh nhớ em ghêêêêêê ❤️‍🔥👨‍❤️‍💋‍👨",
        backgroundcolor: "#F1C40F",
        cat_body: "Bé yêu ới ơi",
      },
      {
        cat_id: "4",
        cat_name: "🔊 Gọi cho anh đê 🔊",
        backgroundcolor: "#2ECC71",
        cat_body: "Gọi cho tuiiii liềnnn",
      },
    ],
    change: false,
  });

  const chooseItem = (token, item) => {
    // const token = "ExponentPushToken[HsWRXWGhvRSq6VAwM_RTG0]";
    switch (item.cat_id) {
      case "1":
        sendPushNoti(token, item.cat_name, item.cat_body);
        break;
      case "2":
        sendPushNoti(token, item.cat_name, item.cat_body);
        break;
      case "3":
        sendPushNoti(token, item.cat_name, item.cat_body);
        break;
      case "4":
        sendPushNoti(token, item.cat_name, item.cat_body);
        break;

      default:
        break;
    }
  };
  const [tokenInput, setTokenInput] = useState("");
  const [token, setToken] = useState(undefined);
  return (
    <View>
      <Header
        centerComponent={{ text: "🌈 👆 Gấu 👆 🌈", style: { color: "#fff" } }}
      />
      <View style={styles.container}>
        {token && token !== null && token !== undefined ? (
          <Text style={styles.heading}>
            {`Mã số của Gấu 👇 là 1621527508990.`}
          </Text>
        ) : (
          <View>
            <Input
            autoCompleteType={true}
              label="Mã số Gấu 👇: 😘 "
              placeholder="Nhập mã số của Gấu 👇 vào đây:"
              value={tokenInput}
              onChangeText={setTokenInput}
            />
            <Button
              title="Xác nhận mã số"
              onPress={() => {
                if (tokenInput) {
                  if (tokenInput == 1621527508990) {
                    setToken("ExponentPushToken[HsWRXWGhvRSq6VAwM_RTG0]");
                  } else {
                  }
                }
              }}
              // onPress={async () => {
              //   if (tokenInput) {
              //     const storedToken = await getToken(tokenInput);
              //     console.log(storedToken);
              //     if(storedToken){
              //         if(storedToken.id ==1621527508990){
              //           setToken(storedToken);

              //         }
              //     }
              //     else{

              //     }
              //   }
              // }}
            />
          </View>
        )}

        {token && token !== null && token !== "" && (
          <View style={styles.containerBox}>
            <View>
              <Text style={styles.heading}>TRIỆU HỒI</Text>
            </View>
            {category.categes.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={{
                  textAlign: "center",
                  // flex: "48% 0 0",
                  borderRadius: 5,
                  marginBottom: 20,
                  display: "flex",
                  height: 50,
                  minWidth: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: item.backgroundcolor,
                }}
                onPress={() => chooseItem(token, item)}
              >
                <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  {" "}
                  {item.cat_name.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
