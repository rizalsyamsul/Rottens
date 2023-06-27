import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import Card from "../../components/Card";
import Header from "../../components/Header";

const GET_MOVIES = gql`
  query FindAllMovies {
    findAllMovies {
      id
      title
      slug
      synopsis
      trailerUrl
      imgUrl
      rating
      genreId
      userMongoId
      Genre {
        id
        name
      }
    }
  }
`;

export default function MovieList({ navigation }) {
  const { loading, error, data } = useQuery(GET_MOVIES);

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
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Movies List</Text>
          <View style={styles.row}>
            {data.findAllMovies.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </View>
        </View>
      </ScrollView>
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
