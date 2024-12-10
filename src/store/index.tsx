import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export type TeamType = {
  id: number;
  name: string;
};
export type StoreType = {
  userName: string;
  teams: TeamType[];
  modalOpen: boolean;
  setUserName: (username: string) => void;
  setTeams: (newteams: TeamType[]) => void;
  setModalOpen: (isOpen: boolean) => void;
};

export const useStore = create<StoreType>()(
  persist(
    (set) => ({
      userName: "",
      teams: [],
      modalOpen: false,
      setUserName: (newName) => set(() => ({ userName: newName })),
      setTeams: (newteams) => set(() => ({ teams: newteams })),
      setModalOpen: (isOpen) => set(() => ({ modalOpen: isOpen })),
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
  const teams = useStore((state) => state.teams);
  const modalOpen = useStore((state) => state.modalOpen);
  //actions
  const setUserName = useStore((state) => state.setUserName);
  const setTeams = useStore((state) => state.setTeams);
  const setModalOpen = useStore((state) => state.setModalOpen);

  return { userName, setUserName, teams, setTeams, modalOpen, setModalOpen };
};
