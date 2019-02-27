import { createDrawerNavigator, createAppContainer } from "react-navigation";

import AppStack from "./GrocerStack";
import { Dimensions } from "react-native";

/**
 * Drawer stack
 */
const DrawerStack = createDrawerNavigator(
  {
    Stack: {
      screen: AppStack
    }
  },

  {
    drawerWidth: Dimensions.get("screen").width / 1.2,
    initialRouteName: "Stack"
  }
);

const AppNav = createAppContainer(DrawerStack);
export default AppNav;
