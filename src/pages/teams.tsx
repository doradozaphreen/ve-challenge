import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useStoreSelector } from "../store";
import { getTeams } from "../services/teams";
import teamImage from "@/assets/pics/pic2.svg";
import CreateTeamModal from "../modals/create-team-modal";
import JoinTeamModal from "../modals/join-team-modal";
/**
 * Teams component that displays the user's name and provides options to create or join a team.
 *
 * This component fetches the list of teams when it mounts and updates the state with the fetched teams.
 * It also provides buttons to open modals for creating or joining a team.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @remarks
 * This component uses the `useStoreSelector` hook to access and update the global state.
 * It also uses the `useEffect` hook to fetch the teams when the component mounts.
 *
 * @throws {Error} Throws an error if fetching teams fails.
 */
const Teams: React.FC = () => {
  const { userData, setTeams, setJoinTeamOpen, setCreateTeamOpen } =
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
      <div className="flex flex-col grow justify-start">
        <div className="flex flex-col w-11/12 mx-auto justify-center h-[220px] rounded-xl gap-4">
          <p className="text-3xl font-bold ">
            Welcome{" "}
            <span className="text-app-primary-color ">
              {userData.userName}{" "}
            </span>{" "}
          </p>
          <p className="text-lg font-semibold">
            Now create or join a team to start the challenge{" "}
          </p>
          <div className="flex gap-2 mx-auto">
            <Button
              className=" w-[120px] font-semibold text-md text-white"
              color="primary"
              onPress={() => setCreateTeamOpen(true)}
            >
              Create Team
            </Button>
            <Button
              className=" w-[120px] font-semibold text-md text-white"
              color="primary"
              onPress={() => setJoinTeamOpen(true)}
            >
              Join Team
            </Button>
          </div>
        </div>
      </div>
      {/* Modals */}
      <CreateTeamModal />
      <JoinTeamModal />
    </div>
  );
};

export default Teams;
