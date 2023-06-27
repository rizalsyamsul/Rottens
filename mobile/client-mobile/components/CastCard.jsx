import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default function CastCard({ item }) {
  if (!item) {
    return (
      <View style={styles.cardContainer}>
        <Text>Coming Soon</Text>
      </View>
    );
  }
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: item.profilePict,
        }}
        style={styles.poster}
      />
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
    justifyContent: "flex-start",
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
