import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CarouselItem from "./Carousel";
import styled from "styled-components";
import dimension from "../config/dimension";
const CarouselContainer = (props) => {
  const [carouselItems, setCarouselItems] = useState(props.carouselData);
  return (
    <Carousel>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {carouselItems.map((item, index) => (
          <CarouselItem
            small={props.small}
            key={index}
            image={{ uri: item.image }}
          />
        ))}
      </ScrollView>
    </Carousel>
  );
};
const Carousel = styled.View`
  margin: ${dimension.width * 0.04}px 1px;
`;
export default CarouselContainer;
