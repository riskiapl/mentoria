import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useGlobalStore } from "@/store/global";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const { isDarkMode } = useGlobalStore();
  const colors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} name="compass" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
