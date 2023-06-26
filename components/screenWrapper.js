import { View, Text, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function ScreenWrapper({ children }) {
  let statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS == "ios"
    ? 0
    : 20;

  return <View style={{ paddingTop: statusBarHeight }}>{children}</View>;
}
