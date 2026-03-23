import { useGlobalStore } from "@/store/global";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const { isDarkMode, hasHydrated } = useGlobalStore();

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
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
