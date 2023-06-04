import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { Icon, Overlay } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible((currentState) => !currentState);
  };

  async function loadFonts() {
    await Font.loadAsync({
      Tabssom: require("./fonts/Tabssom.ttf"),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>LOADING</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 9,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#37474F",
        }}
      >
        <View
          style={{
            width: 300,
            height: 350,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#263238",
          }}
        >
          <Text>BMI: 30</Text>
          <Text>شما در بازه افراد چاق هستید</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#212121",
        }}
      >
        <Icon
          name="medkit-outline"
          type="ionicon"
          color="#FFF"
          size={35}
          onPress={() => toggleOverlay()}
        />
      </View>
      <Overlay
        isVisible={overlayVisible}
        onBackdropPress={() => toggleOverlay()}
      >
        <Text>Overlay</Text>
      </Overlay>
    </View>
  );
}
