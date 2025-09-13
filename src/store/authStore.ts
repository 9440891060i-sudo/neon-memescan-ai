import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    email: string;
    username: string;
  } | null;
  login: (email: string, password: string, username?: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: async (email: string, password: string, username?: string) => {
        // Dummy login logic - always succeeds
        const user = {
          id: '1',
          email,
          username: username || email.split('@')[0],
        };
        
        set({ isAuthenticated: true, user });
        return true;
      },
      logout: () => {
        set({ isAuthenticated: false, user: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);