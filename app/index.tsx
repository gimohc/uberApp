import { Redirect } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"
const Home = () => {
  return<Redirect href="/(auth)/welcome" />
};
export default Home;