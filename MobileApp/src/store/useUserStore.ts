
import { create } from 'zustand';

interface UserState {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;

  userId: string | null;
  username: string | null;
  token: string | null;
  setUser: (id: string, name: string, token: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
  userId: null,
  username: null,
  token: null,
  setUser: (id, name, token) => set({ userId: id, username: name, token }),
  clearUser: () => set({ userId: null, username: null, token: null }),
}));
