import { Button } from "@nextui-org/button";
import { useStoreSelector } from "../store";
import teamImage from "@/assets/pics/welcome-pic.svg";
import CreateTeam from "../modals/create-team";
const Teams = () => {
  const { userName, setModalOpen, modalOpen } = useStoreSelector();
  console.log(modalOpen);
  const handleOpen = () => {
    setModalOpen(true);
  };
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
        <Button className=" font-semibold" color="primary" onPress={handleOpen}>
          Create Team
        </Button>
        <Button className=" font-semibold" color="primary">
          Join Team
        </Button>
      </div>
      {/* Modals */}
      <CreateTeam />
    </div>
  );
};

export default Teams;
