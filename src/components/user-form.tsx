import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import userImage from "@/assets/pics/welcome-pic.svg";
import { useNavigate } from "react-router-dom";
import { useStoreSelector } from "../store";
import { useState } from "react";

const Userform: React.FC = () => {
  const { setUserName } = useStoreSelector();
  const [nickName, setNickName] = useState("");
  const router = useNavigate();
  const handleClick = () => {
    setUserName(nickName);
    router("/teams");
  };
  return (
    <div className="flex flex-col w-10/12 md:w-6/12 mx-auto justify-center gap-2">
      <img
        className="mx-auto"
        width={260}
        height={260}
        src={userImage}
        alt="logo"
      />
      <h1 className="text-3xl font-bold text-center my-2">
        Start by typing your name
      </h1>
      <Input
        placeholder="Type your username"
        onChange={(e) => setNickName(e.target.value)}
      />
      <Button
        className="w-10 mx-auto text-lg font-semibold text-white my-2"
        size="lg"
        color="primary"
        onPress={handleClick}
      >
        Start
      </Button>
    </div>
  );
};

export default Userform;
