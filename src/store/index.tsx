import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export type TeamType = {
  id: number;
  name: string;
};
export type StoreType = {
  username: string;
  teams: TeamType[];
  setUsername: (username: string) => void;
  setTeams: (newteams: TeamType[]) => void;
};

export const useChallengeStore = create<StoreType>()(
  persist(
    (set) => ({
      username: "",
      teams: [],
      setUsername: (newName) => set(() => ({ username: newName })),
      setTeams: (newteams) => set(() => ({ teams: newteams })),
    }),
    {
      name: "challenge-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
