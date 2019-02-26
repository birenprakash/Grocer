import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import commonStyles from "../Themes/ApplicationStyles";
import images from "../Themes/images";
import colors from "../Themes/colors";

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={images.launchGif}
          onLoadEnd={() =>
            setTimeout(() => {
              this.props.navigation.replace("home");
            }, 5000)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...commonStyles,
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    alignSelf: "center",
    height: 200,
    width: 200
  }
});

export default LaunchScreen;
