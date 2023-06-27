import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Header from "../components/Header";
import CastCard from "../components/CastCard";
import { gql, useQuery } from "@apollo/client";
const GET_MOVIE_DETAIL = gql`
  query FindMovieById($findMovieByIdId: ID) {
    findMovieById(id: $findMovieByIdId) {
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
        name
      }
      User {
        _id
        username
        email
        role
        phoneNumber
        address
      }
      Casts {
        id
        name
        profilePict
      }
    }
  }
`;

export default function Detail({ route, navigation }) {
  const { id } = route.params;
  const { loading, error, data } = useQuery(GET_MOVIE_DETAIL, {
    variables: { findMovieByIdId: id },
  });

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
          <YoutubePlayer
            height={210}
            play={true}
            videoId={data.findMovieById.trailerUrl}
          />

          <View style={styles.row}>
            <Image
              source={{
                uri: data.findMovieById.imgUrl,
              }}
              style={styles.poster}
            />
            <View style={styles.cardContainer}>
              <Text style={styles.movieTitle}>{data.findMovieById.title}</Text>
              <Text style={styles.movieGenre}>
                {data.findMovieById.Genre.name}
              </Text>

              <View style={styles.rowRating}>
                <Image
                  source={require("../assets/tomato.png")}
                  style={styles.logo}
                />
                <Text style={styles.movieRating}>
                  {data.findMovieById.rating}%
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.textHead}>Synopsis</Text>
            <Text style={styles.textSynopsis}>
              {data.findMovieById.synopsis}
            </Text>
          </View>
          <View>
            <Text style={styles.textHead}>Casts</Text>
            {data.findMovieById.Casts.map((item) => (
              <CastCard item={item} key={item.id} />
            ))}
          </View>

          <View style={styles.cardAuthor}>
            <Text style={styles.textAuthor}>
              Created By: {data.findMovieById.User.username}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  movieTitle: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  movieGenre: {
    paddingTop: 10,
    fontSize: 17,
    marginBottom: 10,
    textAlign: "center",
  },
  movieRating: {
    paddingTop: 10,
    fontSize: 25,
    marginBottom: 10,
    fontWeight: "bold",
  },
  textHead: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  textSynopsis: {
    paddingTop: 10,
    fontSize: 14,
    marginBottom: 10,
    textAlign: "justify",
  },
  row: {
    flexDirection: "row",
    paddingTop: 10,
    columnGap: 10,
  },
  rowRating: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingVertical: 20,
    height: 300,
  },
  poster: {
    height: 230,
    width: 150,
    marginBottom: 10,
    resizeMode: "contain",
    borderRadius: 5,
  },
  cardContainer: {
    backgroundColor: "#E5E4E2",
    borderRadius: 8,
    elevation: 2,
    height: 230,
    width: 200,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  cardAuthor: {
    marginVertical: 10,
    backgroundColor: "#E5E4E2",
    borderRadius: 2,
    elevation: 2,
  },
  textAuthor: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
