import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { Button, Icon, Overlay } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Result from "./screens/Result";
import Metric from "./screens/Metric";
import Imperial from "./screens/Imperial";

const Stack = createStackNavigator();
const TopTabs = createMaterialTopTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Tabssom: require("./fonts/Tabssom.ttf"),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  const homeTabs = () => {
    return (
      <TopTabs.Navigator
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "#757575",
          style: { backgroundColor: "#212121" },
          labelStyle: {
            textAlign: "center",
            fontFamily: "Tabssom",
            fontSize: 20,
          },
          indicatorStyle: {
            borderBottomColor: "#0277BD",
            borderBottomWidth: 1,
          },
        }}
      >
        <TopTabs.Screen
          name="Metric"
          component={Metric}
          options={{ title: "کیلوگرم و سانتی‌متر" }}
        />
        <TopTabs.Screen
          name="Imperial"
          component={Imperial}
          options={{ title: "اینچ و پوند" }}
        />
      </TopTabs.Navigator>
    );
  };

  if (!fontsLoaded) {
    return <Text>LOADING</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          children={homeTabs}
          options={{
            title: "محاسبه‌گر شاخص توده بدنی",
            headerTintColor: "#ECEFF1",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#212121",
            },
            headerTitleStyle: {
              fontFamily: "Tabssom",
              fontSize: 22,
            },
            headerRight: () => (
              <Icon
                name="info"
                type="AntDesign"
                color="white"
                size={28}
                onPress={() => alert("Design & Development: Alireza Bagheri")}
              />
            ),
            headerRightContainerStyle: {
              marginRight: 10,
            },
          }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            title: "نتیجه",
            headerStyle: { backgroundColor: "#00090B" },
            headerTintColor: "#ECEFF1",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Tabssom",
              fontSize: 24,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
