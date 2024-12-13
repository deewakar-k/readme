import { create } from "zustand";

interface SectionStore {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const useSectionStore = create<SectionStore>((set) => ({
  activeSection: "profile",
  setActiveSection: (id) => set({ activeSection: id }),
}));
