import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screen/Home";
import Modal from "../Screen/Modal";

const RootStack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Group>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="mo" component={Modal} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: "modal" }}>
          <RootStack.Screen name="MyModal" component={Modal} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
