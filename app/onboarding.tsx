// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";
import { Colors } from "@/constants/theme";
import { useGlobalStore } from "@/store/global";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Onboarding() {
  // const router = useRouter();
  const { toggleTheme, isDarkMode } = useGlobalStore();
  const colors = Colors[isDarkMode ? "dark" : "light"];

  const handleFinish = async () => {
    // await AsyncStorage.setItem("alreadyLaunched", "true");
    // router.replace("/(tabs)"); // Gunakan replace agar user tidak bisa 'back' ke onboarding
    toggleTheme();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text className="text-lg font-bold">Selamat Datang di Aplikasi!</Text>
      <Text style={{ color: "#ef4444" }}>Selamat Datang di Aplikasi!</Text>
      <Button title="Mulai Sekarang" onPress={handleFinish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
