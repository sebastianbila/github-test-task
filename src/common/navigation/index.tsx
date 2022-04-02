import React from "react";

import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "../../scenes/main";
import routes from "./routes";

const RootStack = createStackNavigator();

// To use navigator outside components (ex. in service)
let navigator: NavigationContainerRef<any>;

function RootNavigator() {
  return (
    <NavigationContainer
      ref={(ref: NavigationContainerRef<any>) => (navigator = ref)}
    >
      <RootStack.Navigator
        initialRouteName={routes.mainPage}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <RootStack.Screen name={routes.mainScreen} component={MainScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export { navigator, routes };
export default RootNavigator;
