import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import dimension from "../config/dimension";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { menu: state.menu };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: () => dispatch({ type: "CLOSEMENU" }),
  };
};

const Menu = (props) => {
  const Anim = useRef(new Animated.Value(900)).current;

  useEffect(() => {
    if (props.menu == "open") {
      Animated.spring(Anim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    } else if (props.menu == "close") {
      Animated.spring(Anim, {
        toValue: 900,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [props.menu]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        top: Anim,
        zIndex: 50,
      }}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.8)"]}
        style={{
          width: "100%",
          height: "40%",
        }}
        onPress={props.closeMenu}
      >
        <LinearGradient
          colors={["rgba(255,148,115,1)", "rgba(255,123,123,1)"]}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "40%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        />
      </LinearGradient>
      <View
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: "#f0f3f5",
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: "-3.5%",
            left: "45%",
            zIndex: 200,
            backgroundColor: "#f0f3f5",
            borderRadius: 30,
            padding: 7,
            elevation: 2,
          }}
          onPress={props.closeMenu}
        >
          <Ionicons name="close" size={30} color={"#5d5d5d"} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
