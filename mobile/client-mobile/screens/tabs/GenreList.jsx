import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import Header from "../../components/Header";
import GenreCard from "../../components/GenreCard";

const GET_GENRES = gql`
  query FindAllGenre {
    findAllGenre {
      id
      name
    }
  }
`;

export default function GenreList() {
  const { loading, error, data } = useQuery(GET_GENRES);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Genre List</Text>

        <FlatList
          data={data.findAllGenre}
          renderItem={({ item }) => {
            return <GenreCard item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  section: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  row: {
    marginTop: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
  },
});
