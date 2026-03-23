export interface GlobalState {
  isDarkMode: boolean;
  isBoardingCompleted: boolean;

  hasHydrated: boolean; // Menambahkan properti untuk tracking hydration

  toggleTheme: () => void;
  setDarkMode: (value: boolean) => void;
  setBoardingCompleted: (value: boolean) => void;

  setHasHydrated: (value: boolean) => void; // Menambahkan fungsi untuk mengatur status hydration
}
