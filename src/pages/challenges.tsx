import { Button } from "@nextui-org/react";
import { useStoreSelector } from "../store";
import teamImage from "@/assets/pics/pic3.svg";

const Challenges: React.FC = () => {
  const { userData, teamName } = useStoreSelector();

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
        <p className="text-lg font-semibold">
          Now create or join a team to start the challenge{" "}
        </p>
        <div className="flex flex-col justify-center gap-2 my-2 grow">
          <div className=" flex flex-col grow border rounded-lg p-2 shadow-xl">
            <p className="text-2xl font-bold mb-4">CHALLENGES</p>
            <div className="flex justify-between">
              <p className="font-bold text-xl">The dark revenge</p>
              <Button
                className="w-10 text-app-text-color font-bold"
                size="sm"
                color="success"
              >
                Start
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
