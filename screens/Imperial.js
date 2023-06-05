import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { Button, Icon, Slider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

export default function Imperial({ navigation }) {
  const [heightSliderValue, setHeightSliderValue] = useState(70);
  const [weightSliderValue, setWeightSliderValue] = useState(165);
  const [isMan, setIsMan] = useState(true);
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

  const heightIncrease = () => {
    if (heightSliderValue < 84) {
      setHeightSliderValue((currentValue) => currentValue + 1);
    }
  };

  const heightDecrease = () => {
    if (heightSliderValue > 56) {
      setHeightSliderValue((currentValue) => currentValue - 1);
    }
  };

  const weightIncrease = () => {
    if (weightSliderValue < 275) {
      setWeightSliderValue((currentValue) => currentValue + 1);
    }
  };

  const weightDecrease = () => {
    if (weightSliderValue > 55) {
      setWeightSliderValue((currentValue) => currentValue - 1);
    }
  };

  const calculateBMI = () => {
    let height = heightSliderValue * heightSliderValue;
    let weight = weightSliderValue;
    let BMI = Math.round((weight * 703) / height);
    alert(BMI);
    navigation.navigate("Result");
  };

  return (
    <View style={{ flex: 1, backgroundColor: isMan ? "#1b5e20" : "#ff5cc1" }}>
      <View style={{ flex: 9, justifyContent: "center" }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              height: 175,
              margin: 5,
              padding: 5,
            }}
          >
            <View
              style={{
                width: 145,
                height: 160,
                backgroundColor: isMan ? "#39c442" : "#ff9ad8",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 35,
              }}
            >
              <Icon
                name="man"
                type="ionicon"
                color="#FFF"
                size={70}
                onPress={() => setIsMan(true)}
              />
            </View>
            <View
              style={{
                width: 145,
                height: 160,
                backgroundColor: isMan ? "#39c442" : "#ff9ad8",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 35,
              }}
            >
              <Icon
                name="woman"
                type="ionicon"
                color="#FFF"
                size={70}
                onPress={() => setIsMan(false)}
              />
            </View>
          </View>

          <View style={{ height: 15 }} />

          <View
            style={{
              justifyContent: "center",
              margin: 5,
              marginTop: -5,
              padding: 5,
            }}
          >
            <View
              style={{
                height: 60,
                backgroundColor: isMan ? "#39c442" : "#ff9ad8",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            >
              <Slider
                value={heightSliderValue}
                onValueChange={(value) => setHeightSliderValue(value)}
                minimumValue={56}
                maximumValue={84}
                step={1}
                style={{ height: 70, marginHorizontal: 20 }}
                thumbTintColor={"blue"}
                thumbStyle={{
                  height: 30,
                  width: 30,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-around",
                backgroundColor: isMan ? "#39c442" : "#ff9ad8",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                height: 75,
              }}
            >
              <Button
                buttonStyle={{
                  width: 100,
                  height: 75,
                  borderRadius: 10,
                  backgroundColor: isMan ? "#39c442" : "#ff9ad8",
                }}
                icon={
                  <Icon name="add-circle-outline" size={50} type="ionicon" />
                }
                onPress={() => heightIncrease()}
              />

              <Text
                style={{
                  height: 75,
                  fontWeight: 700,
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                قد (اینچ) {"\n"}
                {heightSliderValue}
              </Text>
              <Button
                buttonStyle={{
                  width: 100,
                  height: 75,
                  borderRadius: 10,
                  backgroundColor: isMan ? "#39c442" : "#ff9ad8",
                }}
                icon={
                  <Icon name="remove-circle-outline" size={50} type="ionicon" />
                }
                onPress={() => heightDecrease()}
              />
            </View>
          </View>

          <View style={{ height: 15 }} />

          <View
            style={{
              justifyContent: "center",
              margin: 5,
              marginTop: -5,
              padding: 5,
            }}
          >
            <View
              style={{
                height: 60,
                backgroundColor: isMan ? "#39c442" : "#ff9ad8",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <Slider
                value={weightSliderValue}
                onValueChange={(value) => setWeightSliderValue(value)}
                minimumValue={55}
                maximumValue={275}
                step={1}
                style={{ height: 70, marginHorizontal: 20 }}
                thumbTintColor={"blue"}
                thumbStyle={{
                  height: 30,
                  width: 30,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-around",
                backgroundColor: isMan ? "#39c442" : "#ff9ad8",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                height: 75,
              }}
            >
              <Button
                buttonStyle={{
                  width: 100,
                  height: 75,
                  borderRadius: 10,
                  backgroundColor: isMan ? "#39c442" : "#ff9ad8",
                }}
                icon={
                  <Icon name="add-circle-outline" size={50} type="ionicon" />
                }
                onPress={() => weightIncrease()}
              />

              <Text
                style={{
                  height: 75,
                  fontWeight: 700,
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                وزن (پوند) {"\n"}
                {weightSliderValue}
              </Text>
              <Button
                buttonStyle={{
                  width: 100,
                  height: 75,
                  borderRadius: 10,
                  backgroundColor: isMan ? "#39c442" : "#ff9ad8",
                }}
                icon={
                  <Icon name="remove-circle-outline" size={50} type="ionicon" />
                }
                onPress={() => weightDecrease()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          backgroundColor: "#212121",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <Button
          buttonStyle={{ width: 300, height: 58, backgroundColor: "#212121" }}
          title=" CALCULATE"
          titleStyle={{ fontSize: 24, fontWeight: 700 }}
          icon={
            <Icon
              name="calculator-outline"
              color="#FFF"
              size={40}
              type="ionicon"
            />
          }
          onPress={() => calculateBMI()}
        />
      </View>
    </View>
  );
}
