import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface KluxState {
  isPremium: boolean;
  setIsPremium: (status: boolean) => void;
}

export const useKluxStore = create<KluxState>()(
  persist(
    (set) => ({
      isPremium: false,
      setIsPremium: (status: boolean) => set({ isPremium: status }),
    }),
    {
      name: 'klux-storage',
    }
  )
);
