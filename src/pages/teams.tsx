import { Button } from "@nextui-org/react";
import { useStoreSelector } from "../store";
import teamImage from "@/assets/pics/welcome-pic.svg";
import CreateTeamModal from "../modals/create-team-modal";
import JoinTeamModal from "../modals/join-team-modal";
import { useEffect } from "react";
import { getTeams } from "../services/teams";
const Teams = () => {
  const { userName, setModalOpen, setTeams } = useStoreSelector();
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getTeams();
        setTeams(response.payload);
      } catch (error) {
        console.log(error);
        throw new Error("Error fetching teams");
      }
    };
    fetchTeams();
  }, [setTeams]);

  return (
    <div className="flex flex-col justify-center text-center">
      <img
        className="mx-auto"
        width={260}
        height={260}
        src={teamImage}
        alt="logo"
      />

      <p className="text-2xl font-bold ">
        Welcome <span className="text-app-primary-color ">{userName} </span>{" "}
      </p>
      <p className="text-lg">
        Now create or join a team to start the challenge{" "}
      </p>
      <div className="flex flex-row justify-center gap-2 my-2">
        <Button
          className=" font-semibold text-md"
          color="primary"
          onPress={() => setModalOpen(true)}
        >
          Create Team
        </Button>
        <Button
          className=" font-semibold text-md"
          color="primary"
          onPress={() => setModalOpen(true)}
        >
          Join Team
        </Button>
      </div>
      {/* Modals */}
      <CreateTeamModal />
      <JoinTeamModal />
    </div>
  );
};

export default Teams;
