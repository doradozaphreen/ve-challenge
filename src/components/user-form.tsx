import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useStoreSelector } from "../store";
import { useState } from "react";
import { v4 as randomId } from "uuid";

const Userform: React.FC = () => {
  const { setUserData } = useStoreSelector();
  const [userName, setUserName] = useState("");
  const router = useNavigate();
  const handleClick = () => {
    const userId = randomId();
    setUserData({ id: userId, userName });
    router("/teams");
  };
  return (
    <div className="flex flex-col h-full w-10/12 md:w-6/12 mx-auto justify-start gap-2">
      <h1 className="text-3xl font-bold text-center my-2">
        Start by typing your name
      </h1>
      <Input
        placeholder="Type your username"
        onChange={(e) => setUserName(e.target.value)}
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
