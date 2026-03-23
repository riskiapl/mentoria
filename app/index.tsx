import { useGlobalStore } from "@/store/global";
import { Redirect } from "expo-router";

export default function Index() {
  const { isBoardingCompleted, hasHydrated } = useGlobalStore();

  // Pastikan data storage sudah terbaca sebelum memutuskan rute
  if (!hasHydrated) return null;

  if (!isBoardingCompleted) {
    // Jika belum onboarding, lempar ke screen onboarding
    return <Redirect href="/onboarding" />;
  }

  // Jika sudah, lempar ke folder tabs
  return <Redirect href="/(tabs)" />;
}
