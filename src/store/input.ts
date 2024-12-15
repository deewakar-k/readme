import { create } from "zustand";

interface ShowInputState {
  showInput: boolean;
  setShowInput: (show: boolean) => void;
}

export const useShowInputStore = create<ShowInputState>((set) => ({
  showInput: false,
  setShowInput: (show) => set({ showInput: show }),
}));
