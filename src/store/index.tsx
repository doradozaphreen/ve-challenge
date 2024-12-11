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
  modalOpen: boolean;
  setUserName: (username: string) => void;
  setTeamName: (teamname: string) => void;
  setTeams: (newteams: TeamsType[]) => void;
  setModalOpen: (isOpen: boolean) => void;
};

export const useStore = create<StoreType>()(
  persist(
    (set) => ({
      userName: "",
      teamName: "",
      teams: [],
      modalOpen: false,
      setUserName: (newName) => set(() => ({ userName: newName })),
      setTeams: (newteams) => set(() => ({ teams: newteams })),
      setModalOpen: (isOpen) => set(() => ({ modalOpen: isOpen })),
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
  const modalOpen = useStore((state) => state.modalOpen);
  //actions
  const setUserName = useStore((state) => state.setUserName);
  const setTeams = useStore((state) => state.setTeams);
  const setModalOpen = useStore((state) => state.setModalOpen);

  return {
    userName,
    setUserName,
    teamName,
    teams,
    setTeamName,
    setTeams,
    modalOpen,
    setModalOpen,
  };
};
