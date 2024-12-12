import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useStoreSelector } from "../store";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { createTeam } from "../services/teams";
import { useState } from "react";

const CreateTeamModal: React.FC = () => {
  const { createTeamOpen, setCreateTeamOpen, userData } = useStoreSelector();
  const [teamName, setTeamName] = useState<string>("");

  const handleRegisterTeam = async () => {
    const response = await createTeam({
      name: teamName,
      userId: Number(userData.id), // pedir cambiar id a string para enviar el uuuid
    });
    if (response.status !== 200 && response.status !== 201) {
      toast.error(response.payload.message);
    } else {
      toast.success("Success, team created!!!");
    }
  };
  return (
    <Modal
      disableAnimation
      backdrop="blur"
      className="px-2 mx-2 bg-app-text-color min-h-[300px] min-w-[360px] rounded-lg"
      isOpen={createTeamOpen}
      placement="center"
      onOpenChange={() => setCreateTeamOpen(false)}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col justify-center text-center font-bold">
              <p className="text-2xl font-semibold">Create a new team</p>
            </ModalHeader>
            <ModalBody className="flex flex-col justify-center gap-4">
              <label className="font-semibold text-lg ">
                Team Name
                <Input
                  className="my-1"
                  placeholder="Type a name"
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </label>
              <Button
                className="w-10 mx-auto"
                color="primary"
                onPress={handleRegisterTeam}
              >
                Create
              </Button>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CreateTeamModal;
