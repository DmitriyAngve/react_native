import { useState } from "react";
// View - это просто <div>. Text - это просто <p>
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;
