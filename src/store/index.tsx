import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
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
  userName: string;
  teamName: string;
  teams: TeamsType[];
  createTeamOpen: boolean;
  joinTeamOpen: boolean;
  setUserName: (username: string) => void;
  setTeamName: (teamname: string) => void;
  setTeams: (newteams: TeamsType[]) => void;
  setCreateTeamOpen: (isOpen: boolean) => void;
  setJoinTeamOpen: (isOpen: boolean) => void;
};

export const useStore = create<StoreType>()(
  persist(
    (set) => ({
      userName: "",
      teamName: "",
      teams: [],
      createTeamOpen: false,
      joinTeamOpen: false,
      setUserName: (newName) => set(() => ({ userName: newName })),
      setTeams: (newteams) => set(() => ({ teams: newteams })),
      setCreateTeamOpen: (isOpen) => set(() => ({ createTeamOpen: isOpen })),
      setJoinTeamOpen: (isOpen) => set(() => ({ joinTeamOpen: isOpen })),
      setTeamName: (newName) => set(() => ({ teamName: newName })),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export const useStoreSelector = () => {
  //states
  const userName = useStore((state) => state.userName);
  const teamName = useStore((state) => state.teamName);
  const setTeamName = useStore((state) => state.setTeamName);
  const teams = useStore((state) => state.teams);
  const createTeamOpen = useStore((state) => state.createTeamOpen);
  const joinTeamOpen = useStore((state) => state.joinTeamOpen);

  //actions
  const setUserName = useStore((state) => state.setUserName);
  const setTeams = useStore((state) => state.setTeams);
  const setCreateTeamOpen = useStore((state) => state.setCreateTeamOpen);
  const setJoinTeamOpen = useStore((state) => state.setJoinTeamOpen);

  return {
    userName,
    setUserName,
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
