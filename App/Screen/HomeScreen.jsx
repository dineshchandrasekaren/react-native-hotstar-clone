import React, { useState } from "react";
import CarouselContainer from "../components/CarouselContainer";
import styled from "styled-components";
import Screen from "../components/Screen";
import dimension from "../config/dimension";
import Title from "../components/Title";
import Menu from "../components/Menu";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { TouchableOpacity, View, Animated, StatusBar } from "react-native";

const mapStateToProps = (state) => {
  return { menu: state.menu };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openMenu: () => dispatch({ type: "OPENMENU" }),
  };
};

function HomeScreen(props) {
  const [open, setOpen] = useState(false);
  const bigCarousel = [
    {
      image:
        "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg",
    },
    {
      image:
        "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg",
    },
    {
      image:
        "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg",
    },
    {
      image:
        "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg",
    },
  ];
  const smallCarousel = [
    {
      image:
        "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg",
    },
    {
      image:
        "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg",
    },
    {
      image:
        "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg",
    },
    {
      image:
        "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg",
    },
  ];

  return (
    <Screen>
      <Main>
        <Menu isOpen={true} />
        <Header>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={props.openMenu}>
              <Ionicons
                name="ios-menu"
                size={dimension.width * 0.11}
                style={{ marginRight: "5%" }}
              />
            </TouchableOpacity>
            <Logo>hotstar</Logo>
          </View>
          <Profile />
        </Header>
        <CarouselContainer carouselData={bigCarousel} />
        <Title>Continue Watching</Title>
        <CarouselContainer
          small={true}
          title="S3 S44 14 Aug"
          gradient={true}
          carouselData={smallCarousel}
        />
        <Title>Top Pick For You</Title>
        <CarouselContainer long={true} carouselData={smallCarousel} />
      </Main>
    </Screen>
  );
}

const Main = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

const Header = styled.View`
  width: 100%;
  height: ${dimension.height * 0.089}px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${dimension.width * 0.03}px;
`;
const Profile = styled.Image`
  background: #e4e4e4;
  width: ${dimension.width * 0.12}px;
  height: ${dimension.height * 0.06}px;
  border-radius: ${dimension.width * 0.07}px;
`;

const Logo = styled.Text`
  font-size: ${dimension.width * 0.11}px;
  font-weight: bold;
`;
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
