import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CarouselContainer from './App/components/CarouselContainer';
import styled from "styled-components";

import Screen from './App/components/Screen';
import dimension from './App/config/dimension';

export default function App() {
  const bigCarousel = [{
    image: "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"
  }, {
    image: "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"
  }, {
    image: "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"
  }, {
    image: "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"
  },];
  const smallCarousel = [{
    image: "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"
  }, {
    image: "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"
  }, {
    image: "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"
  }, {
    image: "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"
  },];
  return (
    <Screen>
      <Main>
        <Header>
          <Logo>hotstar</Logo>
          <Profile />
        </Header>
        <CarouselContainer small={false} carouselData={bigCarousel} />
        <CarouselContainer small={true} carouselData={smallCarousel} />
      </Main>
    </Screen>
  );
}

const Main = styled.View`

flex: 1;
background-color:#e5e5e5;
 
 
`

const Header = styled.View`
width: 100%;
height:${dimension.height * 0.089}px;
background-color: #ffffff;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 ${dimension.width * 0.045}px;
`
const Profile = styled.Image`
background: #e4e4e4;
width: ${dimension.width * 0.12}px;
height: ${dimension.height * 0.06}px;
border-radius: ${dimension.width * 0.07}px;
`

const Logo = styled.Text`
font-size:${dimension.width * 0.11}px;
font-weight: bold;
`

