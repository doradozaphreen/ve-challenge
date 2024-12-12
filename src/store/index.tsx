import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export type UserType = {
  id: string;
  userName: string;
};
export type TeamType = {
  id: number;
  name: string;
};
export type TeamsType = {
  id: number;
  name: string;
  code: string;
  createdAt: string;
};
export type StoreType = {
  userData: UserType;
  teamName: string;
  teams: TeamsType[];
  createTeamOpen: boolean;
  joinTeamOpen: boolean;
  setUserData: (newData: UserType) => void;
  setTeamName: (teamname: string) => void;
  setTeams: (newteams: TeamsType[]) => void;
  setCreateTeamOpen: (isOpen: boolean) => void;
  setJoinTeamOpen: (isOpen: boolean) => void;
};

export const useStore = create<StoreType>()(
  persist(
    (set) => ({
      userData: { id: "1", userName: "Diego Dorado" },
      teamName: "The rookies",
      teams: [],
      createTeamOpen: false,
      joinTeamOpen: false,
      setUserData: (newData) => set(() => ({ userData: newData })),
      setTeams: (newteams) => set(() => ({ teams: newteams })),
      setCreateTeamOpen: (isOpen) => set(() => ({ createTeamOpen: isOpen })),
      setJoinTeamOpen: (isOpen) => set(() => ({ joinTeamOpen: isOpen })),
      setTeamName: (newName) => set(() => ({ teamName: newName })),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);
export const useStoreSelector = () => {
  //states
  const userData = useStore((state) => state.userData);
  const teamName = useStore((state) => state.teamName);
  const setTeamName = useStore((state) => state.setTeamName);
  const teams = useStore((state) => state.teams);
  const createTeamOpen = useStore((state) => state.createTeamOpen);
  const joinTeamOpen = useStore((state) => state.joinTeamOpen);

  //actions
  const setUserData = useStore((state) => state.setUserData);
  const setTeams = useStore((state) => state.setTeams);
  const setCreateTeamOpen = useStore((state) => state.setCreateTeamOpen);
  const setJoinTeamOpen = useStore((state) => state.setJoinTeamOpen);

  return {
    userData,
    setUserData,
    teamName,
    teams,
    setTeamName,
    setTeams,
    createTeamOpen,
    joinTeamOpen,
    setCreateTeamOpen,
    setJoinTeamOpen,
  };
};
