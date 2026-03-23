import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Onboarding() {
  const router = useRouter();

  const handleFinish = async () => {
    await AsyncStorage.setItem("alreadyLaunched", "true");
    router.replace("/(tabs)"); // Gunakan replace agar user tidak bisa 'back' ke onboarding
  };

  return (
    <View style={styles.container}>
      <Text>Selamat Datang di Aplikasi!</Text>
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
    backgroundColor: "#f0f0f0",
  },
});
