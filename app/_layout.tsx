import { useGlobalStore } from "@/store/global";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Uniwind } from "uniwind";
import "./../global.css";

export default function RootLayout() {
  const { isDarkMode, hasHydrated } = useGlobalStore();

  useEffect(() => {
    Uniwind.setTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode, hasHydrated]);

  if (!hasHydrated) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Urutan Screen berengaruh pada mana dulu yang di render, pastikan screen index berada paling atas untuk memudahkan pengaturan rute */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </ThemeProvider>
  );
}
