import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { getDocumentsFromFirebase } from "../../Firesbase/CRUD/get-check-and-bank";
import toastiError from "../../Toasti-Messages/bad-message";
import { addNewBank } from "../../Firesbase/CRUD/create-check-and-bank";

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

export const useBankStore = create(
  process.env.NODE_ENV !== "production"
    ? devtools((set, get) => ({
        banks: [],
        banksLocaleStorage: [],
        setBanks: async (bankName) => {
          const { banks } = get();
          const previousBanks = [...banks];
          const updateBank = [...banks, {bank: bankName}];
          set({ banks: updateBank, banksLocaleStorage: updateBank });

          try {
            await addNewBank(bankName);
          } catch (error) {
            set({ banks: previousBanks, banksLocaleStorage: previousBanks });
          }
        },

        fetchBanksFromAPI: async () => {
          try {
            const fetchedBanks = await getDocumentsFromFirebase("banks");
            set({ banks: fetchedBanks });
          } catch (error) {
            toastiError("Error fetching banks:", error);
          }
        },
        //actualizar los bancos de forma local
      }))
    : (set) => ({
        banks: [],
        setBanks: (banks) => set({ banks }),

        fetchBanksFromAPI: async () => {
          try {
            const fetchedBanks = await getDocumentsFromFirebase("banks");
            set({ banks: fetchedBanks });
          } catch (error) {
            toastiError("Error fetching banks:", error);
          }
        },
      })
);

/* export const useUserInformation = create(
  persist(
    (set) => ({
      user: [],
      addUser: (newUser) => {
        set((state) => {
          const userExist = state.some((user) => user.id === newUser.id);
          if (!userExist) {
            return {
              user: [
                ...{
                  userID: state.id,
                  userName: "Desconocido",
                  userPhoto: "",
                  userEmail: state.email,
                },
              ],
            };
          }
        });
      },
      update: (updateUser) => {
        set((state) => {
          const userID = state.some((user) => user.id === updateUser.id);
          if (userID) {
            return {
              user: [
                ...{
                  userID,
                  userName: state.userName,
                  userPhoto: state.userPhoto,
                  userEmail: state.userEmailx,
                },
              ],
            };
          }
        });
      },
      users: () => {
        
      }
    }),
    {
      name: "user-state-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
); */
