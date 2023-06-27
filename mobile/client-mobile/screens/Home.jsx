import * as React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MovieList from "./tabs/MovieList";
import GenreList from "./tabs/GenreList";
export default function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Movie List" component={MovieList} />
      <Tab.Screen name="Genre List" component={GenreList} />
    </Tab.Navigator>
  );
}
