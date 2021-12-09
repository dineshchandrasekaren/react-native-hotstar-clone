import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import dimension from "../config/dimension";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
const CarouselItem = ({
  long = false,
  small = false,
  image,
  width = small ? 0.5 : long ? 0.34 : 0.88,
  height = small ? 0.14 : long ? 0.26 : 0.26,
  gradient,
  title,
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: dimension.width * width,
          height: dimension.height * height,
          backgroundColor: "#b9a9a9",
          borderRadius: 5,
          overflow: "hidden",
          marginLeft: dimension.width * 0.02,
        }}
      >
        <Image source={image} resizeMode="cover" />
        {gradient && (
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "40%",
            }}
          >
            {title && (
              <View
                style={{
                  position: "absolute",
                  bottom: "49%",
                  left: "6%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="play"
                  color="#fff"
                  size={17}
                  style={{ paddingRight: 5 }}
                />
                <Text style={{ color: "#fff", fontSize: 17 }}>{title}</Text>
              </View>
            )}
          </LinearGradient>
        )}
      </View>
    </TouchableOpacity>
  );
};

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
export default CarouselItem;
