import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { useStoreSelector } from "../store";
import { Input } from "@nextui-org/input";
import { useState } from "react";

const CreateTeam: React.FC = () => {
  const { modalOpen, setModalOpen } = useStoreSelector();
  const [teamName, setTeamName] = useState("");
  console.log(modalOpen);

  return (
    <Modal
      backdrop="blur"
      className="px-2 mx-2"
      isOpen={modalOpen}
      onOpenChange={(modalOpen) => setModalOpen(modalOpen)}
      placement="center"
    >
      <ModalContent>
        {() => (
          <div>
            <ModalHeader className="flex flex-col justify-center text-center font-bold">
              Create a new team
            </ModalHeader>
            <ModalBody>
              <Input
                placeholder="Type your username"
                onChange={(e) => setTeamName(e.target.value)}
              />
            </ModalBody>
            <p>current team name : {teamName}</p>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CreateTeam;
