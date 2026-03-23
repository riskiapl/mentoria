import { GlobalState } from "@/types/global_types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      isDarkMode: false, // default value
      isBoardingCompleted: false, // default value

      hasHydrated: false, // Menambahkan properti untuk tracking hydration

      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setDarkMode: (value) => set({ isDarkMode: value }),
      setBoardingCompleted: (value) => set({ isBoardingCompleted: value }),

      setHasHydrated: (value) => set({ hasHydrated: value }), // Menambahkan fungsi untuk mengatur status hydration
    }),
    {
      name: "theme-storage", // Nama key di local storage
      storage: createJSONStorage(() => AsyncStorage), // Engine storage untuk React Native
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHasHydrated(true); // Set hasHydrated ke true setelah rehydration selesai
        }
      },
    },
  ),
);
