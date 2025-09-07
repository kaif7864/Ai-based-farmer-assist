import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="light-content" backgroundColor="#1B5E20" />
      <HomeScreen />
    </SafeAreaView>
  );
}
