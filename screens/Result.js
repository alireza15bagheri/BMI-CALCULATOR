import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { Button, Icon, Overlay } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import Rate, { AndroidMarket } from "react-native-rate";

function Result({ BMI }) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [rated, setRated] = useState(false);

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

  const showResult = () => {
    const userBmi = BMI;
    if (userBmi < 19) {
      return (
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Tabssom",
              fontSize: 55,
              color: "#0288D1",
            }}
          >
            {JSON.stringify(userBmi)}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Tabssom",
              color: "white",
              textAlign: "center",
            }}
          >
            کم وزن
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
              textAlign: "center",
              lineHeight: 20,
              padding: 10,
              fontFamily: "Tabssom",
            }}
          >
            با مراجعه به پزشک نگرانی‌های خود در مورد کمبود وزن خود را بیان کنید.
            پزشک به شما خواهد گفت که چه چیزی مانع وزن گیری شماست و یا اینکه چیزی
            برای نگرانی وجود دارد یا خیر
          </Text>
        </View>
      );
    } else if (userBmi > 19 && userBmi < 25) {
      return (
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Tabssom",
              fontSize: 55,
              color: "#76FF03",
            }}
          >
            {JSON.stringify(userBmi)}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Tabssom",
              color: "white",
            }}
          >
            وزن ایده‌آل
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
              textAlign: "center",
              lineHeight: 20,
              padding: 10,
              fontFamily: "Tabssom",
            }}
          >
            همین روند رو حفظ کن!
          </Text>
        </View>
      );
    } else if (userBmi > 25 && userBmi < 30) {
      return (
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Tabssom",
              fontSize: 55,
              color: "#FFFF00",
            }}
          >
            {JSON.stringify(userBmi)}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Tabssom",
              color: "white",
            }}
          >
            اضافه وزن
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
              textAlign: "center",
              lineHeight: 20,
              padding: 10,
              fontFamily: "Tabssom",
            }}
          >
            بهتر است برای بررسی رژیم غذایی و فعالیت بدنی خود به فرد متخصص مراجعه
            کنید
          </Text>
        </View>
      );
    } else if (userBmi > 30 && userBmi < 35) {
      return (
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Tabssom",
              fontSize: 55,
              color: "#FF6F00",
            }}
          >
            {JSON.stringify(userBmi)}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Tabssom",
              color: "white",
            }}
          >
            چاق
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
              textAlign: "center",
              lineHeight: 20,
              padding: 10,
              fontFamily: "Tabssom",
            }}
          >
            افراد مبتلا به چاقی باید حداقل دو ساعت در هفته فعالیت بدنی داشته
            باشند
          </Text>
        </View>
      );
    } else if (userBmi > 35) {
      return (
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontFamily: "Tabssom",
              fontSize: 55,
              color: "#F44336",
            }}
          >
            {JSON.stringify(userBmi)}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Tabssom",
              color: "white",
            }}
          >
            چاقی شدید
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
              textAlign: "center",
              lineHeight: 20,
              padding: 10,
              fontFamily: "Tabssom",
            }}
          >
            چاقی شدید بیشترین خطر ابتلا به سایر مشکلات مربوط به سلامتی را دارد.
            بهتر است برای دریافت گزینه‌های درمانی به پزشک مراجعه کنید
          </Text>
        </View>
      );
    }
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
    } catch (error) {
      Alert.alert(error.message);
    }
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
          {showResult(BMI)}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: 70,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#212121",
        }}
      >
        <Icon
          name="share-social-outline"
          type="ionicon"
          color="#FFF"
          size={35}
          onPress={() => onShare()}
        />
        <Icon
          name="medkit-outline"
          type="ionicon"
          color="#FFF"
          size={35}
          onPress={() => toggleOverlay()}
        />
        <Icon
          name="star-half-outline"
          type="ionicon"
          color="#FFF"
          size={35}
          onPress={() => {
            const options = {
              // AppleAppID: "2193813192",
              // GooglePackageName: "com.mywebsite.myapp",
              // AmazonPackageName: "com.mywebsite.myapp",
              OtherAndroidURL: "http://www.randomappstore.com/app/47172391",
              preferredAndroidMarket: AndroidMarket.Google,
              preferInApp: false,
              openAppStoreIfInAppFails: true,
              fallbackPlatformURL: "http://www.mywebsite.com/myapp.html",
            };
            Rate.rate(options, (success, errorMessage) => {
              if (success) {
                // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                this.setState({ rated: true });
              }
              if (errorMessage) {
                // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
                console.error(
                  `Example page Rate.rate() error: ${errorMessage}`
                );
              }
            });
          }}
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
