import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import * as Icon from "react-native-feather";

export default function Header() {
  return (
    <SafeAreaView
      style={{
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 70,
            height: 70,
          }}
          source={require("../assets/youtube.png")}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
            marginLeft: -12,
          }}
        >
          Youtube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 22,
        }}
      >
        <Icon.Cast stroke="#fff" width={24} height={24} strokeWidth={1} />
        <Icon.Bell stroke="#fff" width={24} height={24} strokeWidth={1} />
        <Icon.Search stroke="#fff" width={24} height={24} strokeWidth={1} />
        <Icon.User stroke="#fff" width={24} height={24} strokeWidth={1} />
      </View>
    </SafeAreaView>
  );
}
