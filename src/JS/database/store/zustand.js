import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useBankStore = create((set) => ({
  banks: [],
  addBank: (newBank) => {
    set((state) => {
      // Comprobamos si el banco  ya está en el array
      const bankExists = state.some((bank) => bank.title === newBank.title);
      if (!bankExists) {
        return { bank: [...state.bank, newBank] };
      } else {
        return state;
      }
    });
  },
}));

export const useActivePasswordStore = create(
  persist(
    (set) => ({
      passwordStore: false,
      changeStatePassword: () =>
        set((state) => ({ passwordStore: !state.passwordStore })),
    }),
    {
      name: "password-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
