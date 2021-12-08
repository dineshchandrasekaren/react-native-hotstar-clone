import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import dimension from "../config/dimension";
import styled from "styled-components";
const CarouselItem = ({
  small,
  image,
  width = small ? 0.5 : 0.88,
  height = small ? 0.14 : 0.26,
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: dimension.width * width,
          height: dimension.height * height,
          backgroundColor: "#b9a9a9",
          borderRadius: dimension.width * 0.018,
          overflow: "hidden",
          marginLeft: dimension.width * 0.02,
          zIndex: 10,
        }}
      >
        <Image source={image} />
      </View>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//     container: {
//         width: width*0.9,
//         height: 200,
//           borderRadius: 5,
//   overflow: "hidden",
//   marginLeft: 15,
//     }
// })

// const Container = styled.View`
//   width: ${dimension.width * 0.88}px;
//   height: ${dimension.height * 0.26}px;
//   background-color: #b9a9a9;
//   border-radius: ${dimension.width * 0.018}px;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   margin-left: ${dimension.width * 0.04}px;
// `;
// const Container = styled.View`
//   width: ${dimension.width * 0.6}px;
//   height: ${dimension.height * 0.17}px;
//   background-color: #b9a9a9;
//   border-radius: ${dimension.width * 0.018}px;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   margin-left: ${dimension.width * 0.04}px;
// `;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
export default CarouselItem;
