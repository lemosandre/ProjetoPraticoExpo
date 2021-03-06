import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const FlatComponent = ({ data }) => {
  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate("Tela2", { data: data });
  };

  return (
    <TouchableOpacity onPress={navegar} style={styles.container}>
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + data.backdrop_path }}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}
      />

      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cacaca",
    marginBottom: 5,
    flexDirection: "row",
  },
  subcontainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FlatComponent;
