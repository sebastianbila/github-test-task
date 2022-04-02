import React, { ReactElement } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "@/common/navigation";
import { SafeAreaContainer } from "@/common/theme/containers";
import DetailsPage from "@/scenes/main/pages/DetailsPage";
import FavoritePage from "@/scenes/main/pages/FavoritePage";

import MainPage from "./pages/MainPage";

const MainScreenStack = createStackNavigator();

function MainScreen(): ReactElement {
  return (
    <SafeAreaContainer>
      <MainScreenStack.Navigator
        initialRouteName={routes.mainPage}
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainScreenStack.Screen name={routes.mainPage} component={MainPage} />
        <MainScreenStack.Screen
          name={routes.detailsPage}
          component={DetailsPage}
        />
        <MainScreenStack.Screen
          name={routes.favoritePage}
          component={FavoritePage}
        />
      </MainScreenStack.Navigator>
    </SafeAreaContainer>
  );
}

export default MainScreen;
