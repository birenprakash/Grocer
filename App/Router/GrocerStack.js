import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import LaunchScreen from "../Components/LaunchScreen";
import Catagories from "../Components/Catagories";
import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../Themes/colors";
import styles from "../Themes/ApplicationStyles";

/**
 * stack components will be added here for custom header
 */

const launchScreen = ({ navigation }) => (
  <LaunchScreen navigation={navigation} />
);

const catagories = ({ navigation }) => <Catagories navigation={navigation} />;

/**
 * stack components header Code
 */

launchScreen.navigationOptions = {
  header: null
};

catagories.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: <Text>Catagories</Text>,
    headerLeft: (
      <TouchableOpacity
        style={styles.headerButtons}
        onPress={() => navigation.toggleDrawer()}
      >
        <Icon name="bars" size={20} color="#000" />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={styles.headerButtons}>
        <Icon name="home" size={20} color="#000" />
      </TouchableOpacity>
    )
  };
};

/**
 * screen navigation stack
 */

const stack = createStackNavigator({
  launch: { screen: launchScreen },
  home: { screen: catagories }
});

export default stack;
