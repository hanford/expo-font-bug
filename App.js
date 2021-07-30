import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

const fonts = {
  babysweet: require("./assets/fonts/babysweet.ttf"),
  // Any string can be used as the fontFamily name. Here we use an object to provide more control
  "Montserrat-SemiBold": {
    uri: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    display: Font.FontDisplay.FALLBACK,
  },
};

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  loadFonts = async () => {
    await Font.loadAsync(fonts);

    this.setState({ fontsLoaded: true });
  };

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return (
        <View style={[styles.container, { flexDirection: "row" }]}>
          <ActivityIndicator />

          <Text style={{ marginLeft: 8, color: "black" }}>
            Loading fonts...
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: "Montserrat-SemiBold", color: "black" }}>
          Montserrat font
        </Text>

        <Text style={{ fontFamily: "babysweet", color: "black" }}>
          Babysweet font
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
