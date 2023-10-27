import React from "react";
import { TouchableOpacity, Image } from "react-native";
// "TouchableOpacity" - это компонент, позволяющий создавать интерактивные элементы, которые реагируют на касания поль-ля. Когда поль-ль касается, то вызывается ф-ия обратного вызова

import styles from "./screenheader.style";
import { icons } from "../../../constants";
// handlePress - ф-ия обратного вызова, которая может быть передана в компонент
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
