import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";

import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          // В целом этот кусок кода перенаправляет список с вертикального на горизонтальный и делает его подвижным для пользователей
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={({ item }) => <PopularJobCard item={item} />} // renderItem - для отрисовки каждого компонента
            keyExtractor={(item) => item?.job_id} // каждый ключ должен иметь уникальный id
            contentContainerStyle={{ columnGap: SIZES.medium }} // это стиль для контейнера списка. Устанавливает горизонтальное расположение элемeнтов с помощью свойства columnGap
            horizontal // устанавливаю горизонтальную ориентацию списка
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
