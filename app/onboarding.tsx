// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";
import { useGlobalStore } from "@/store/global";
import { Button, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  // const router = useRouter();
  const { toggleTheme } = useGlobalStore();

  const handleFinish = async () => {
    // await AsyncStorage.setItem("alreadyLaunched", "true");
    // router.replace("/(tabs)"); // Gunakan replace agar user tidak bisa 'back' ke onboarding
    toggleTheme();
  };

  return (
    <SafeAreaView className="">
      <View className="bg-red-500 h-screen">
        <View className="p-6 flex-row justify-end bg-amber-500">
          <Pressable onPress={handleFinish}>
            <Text className="text-black dark:text-white">Skip</Text>
          </Pressable>
        </View>
        <Text className="text-gray-600 dark:text-neutral-0">
          Selamat Datang di Aplikasi!
        </Text>
        <Button title="Mulai Sekarang" onPress={handleFinish} />
      </View>
    </SafeAreaView>
  );
}
