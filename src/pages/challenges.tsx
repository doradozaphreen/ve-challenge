import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useStoreSelector } from "../store";
import { getTeams } from "../services/teams";
import teamImage from "@/assets/pics/pic3.svg";
import CreateTeamModal from "../modals/create-team-modal";
import JoinTeamModal from "../modals/join-team-modal";

const Challenges: React.FC = () => {
  const { userData, setTeams, setCreateTeamOpen, teamName } =
    useStoreSelector();
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
    <div className="flex flex-col h-full justify-between text-center">
      <img className="mx-auto" src={teamImage} alt="logo" />
      <div className="flex flex-col grow w-11/12 mx-auto">
        <p className="text-2xl font-bold ">
          User{" "}
          <span className="text-app-primary-color ">{userData.userName} </span>{" "}
        </p>
        <p className="text-2xl font-bold ">
          Team <span className="text-app-primary-color ">{teamName} </span>{" "}
        </p>
        <p className="text-lg">
          Now create or join a team to start the challenge{" "}
        </p>
        <div className="flex flex-row justify-center gap-2 my-2">
          <Button
            className=" font-semibold text-md text-white"
            color="primary"
            onPress={() => setCreateTeamOpen(true)}
          >
            Challenge List
          </Button>
        </div>
      </div>
      {/* Modals */}
      <CreateTeamModal />
      <JoinTeamModal />
    </div>
  );
};

export default Challenges;
