import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FA320A",
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    width: "100%",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});
