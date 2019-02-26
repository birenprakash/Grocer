import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import commonStyles from "../Themes/ApplicationStyles";

class Catagories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a catagories page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...commonStyles
});

export default Catagories;
