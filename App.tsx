import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import * as Icon from "react-native-feather";
import { videos, categories } from "./data";
import VideoCard from "./components/VideoCard";
import Header from "./components/Header";

export default function App(): React.FC {
  const [active, setActive] = useState<number>(0);

  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1, backgroundColor: "#0f0f0f" }}>
        {/*Header*/}
        <Header />

        {/*suggestions categories */}
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: 20 }}
          >
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: index == active ? "white" : "#272727",
                  padding: 8,
                  borderRadius: 8,
                  marginHorizontal: 4,
                }}
                onPress={() => setActive(index)}
              >
                <Text style={{ color: index == active ? "black" : "white" }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/*Video lists*/}
          <FlatList
            contentContainerStyle={{ paddingBottom: 100 }}
            style={{ marginTop: 20 }}
            data={videos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <VideoCard video={item} />}
          />
        </View>
      </View>
    </>
  );
}
