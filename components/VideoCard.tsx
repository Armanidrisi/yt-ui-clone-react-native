import React from "react";
import { Text, View, Image, ImageSourcePropType } from "react-native";
import * as Icon from "react-native-feather";

interface Video {
  title: string;
  thumbnail: ImageSourcePropType;
  upload: string;
  views: string;
  channel: {
    name: string;
    logo: string;
  };
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Image
        style={{
          width: "100%",
          height: 220,
        }}
        source={video.thumbnail}
        resizeMode="cover"
      />
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          //      alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10,
          }}
          source={{ uri: video.channel.logo }}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              color: "white",
              //   height: 40,
              overflow: "hidden",
            }}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {video.title}
          </Text>
          <Text style={{ fontSize: 11, color: "#717171", color: "#717171" }}>
            {`${video.channel.name} • ${video.views} views • ${video.upload}`}
          </Text>
        </View>
        <Icon.MoreVertical stroke="#fff" width={15} height={15} />
      </View>
    </View>
  );
};

export default VideoCard;
