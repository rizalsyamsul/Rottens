import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Card({ item }) {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { id: item.id })}
      >
        <Image source={{ uri: item.imgUrl }} style={styles.poster} />

        <View style={styles.row}>
          <Image source={require("../assets/tomato.png")} style={styles.logo} />
          <Text style={styles.rating}>{item.rating}%</Text>
        </View>

        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    width: "45%",
  },
  poster: {
    height: 240,
    marginBottom: 10,
    resizeMode: "contain",
    borderRadius: 5,
  },
  rating: {
    fontSize: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    columnGap: 5,
  },
  logo: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
});
