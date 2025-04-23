import { create } from "zustand";

interface EditState {
  itemType: "project" | "work" | "contact" | null;
  editingItem: any | null;
  isEditing: boolean;

  startEditing: (type: "project" | "work" | "contact", item: any) => void;

  clearEditing: () => void;
}

const useEditStore = create<EditState>((set) => ({
  itemType: null,
  editingItem: null,
  isEditing: false,

  startEditing: (type, item) =>
    set({
      itemType: type,
      editingItem: item,
      isEditing: true,
    }),

  clearEditing: () =>
    set({
      itemType: null,
      editingItem: null,
      isEditing: false,
    }),
}));

export default useEditStore;
