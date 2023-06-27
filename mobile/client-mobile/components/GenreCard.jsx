import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default function GenreCard({ item }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#D1D0CE",
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 25,
    marginBottom: 10,
  },
  poster: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
