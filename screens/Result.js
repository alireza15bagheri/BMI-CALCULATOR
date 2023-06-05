import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { Button, Icon, Overlay } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

function Result({ BMI }) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Tabssom: require("../fonts/Tabssom.ttf"),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>LOADING</Text>;
  }

  const toggleOverlay = () => {
    setOverlayVisible((currentState) => !currentState);
  };
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
          <Text>BMI: {BMI}</Text>
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
        overlayStyle={{
          width: 300,
          height: 370,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#9bb1bb",
        }}
      >
        <Text style={{ fontFamily: "Tabssom", fontSize: 24 }}>
          فراموش نکنید که در یک نتیجه یکسان، بانوان چربی بیشتری دارند؛ همچنین یک
          فرد مسن نیز چربی بیشتر نسبت به افراد جوان دارد. شاخص توده بدنی جزئیات
          کافی درمورد وضعیت سلامتی یک فرد ارائه نمی‌دهد.
        </Text>
        <Button
          title="Okay"
          titleStyle={{ fontSize: 20, fontWeight: "bold", color: "#212121" }}
          buttonStyle={{ backgroundColor: "#FFF", width: 70 }}
          onPress={() => toggleOverlay()}
        />
      </Overlay>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    BMI: state.BMI,
  };
}

export default connect(mapStateToProps)(Result);
