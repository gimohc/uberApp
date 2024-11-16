import { Stack } from "expo-router";
import "react-native-reanimated";
import "../global.css";

import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />

    </Stack>
  );
}

export default Layout;