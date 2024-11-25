import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "retro",
  setTheme: (theme) => {
    localStorage.getItem("chat-theme", theme);
    set({ theme });
  },
}));
