import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Animated,
  Text,
  Image,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, "Splash">;

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const logoScale = useRef(new Animated.Value(0.9)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const sloganOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 4,
          tension: 30,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        delay: 100,
        useNativeDriver: true,
      }),
      Animated.timing(sloganOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace("Home");
      }, 500);
    });
  }, [logoScale, logoOpacity, textOpacity, sloganOpacity, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F9FF" />
      <Animated.View
        style={[
          styles.logoContainer,
          { opacity: logoOpacity, transform: [{ scale: logoScale }] },
        ]}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </Animated.View>
      <Animated.Text style={[styles.appName, { opacity: textOpacity }]}>
        WaiEdu
      </Animated.Text>
      <Animated.Text style={[styles.slogan, { opacity: sloganOpacity }]}>
        Học tập • Sáng tạo • Khám phá
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F9FF",
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  appName: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#1E3A8A",
    // Để sử dụng font tùy chỉnh, bạn cần load font trong file App.tsx
    // fontFamily: 'PoetsenOne-Regular',
  },
  slogan: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
    // fontFamily: 'Exo-Regular',
  },
});

export default SplashScreen; 