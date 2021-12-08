import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const portrait = height > width;
const landscape = height < width;
const w = portrait ? width : height;
const h = portrait ? height : width;

export default {
  landscape,
  portrait,
  width: w,
  height: h,
};
