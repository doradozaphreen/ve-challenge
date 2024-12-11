import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { TeamsType, useStoreSelector } from "../store";
import { Button } from "@nextui-org/react";

const JoinTeamModal: React.FC = () => {
  const { modalOpen, setModalOpen, teams } = useStoreSelector();
  console.log("the modal state is " + modalOpen);

  return (
    <Modal
      disableAnimation
      backdrop="blur"
      className="px-2 mx-2 bg-app-text-color min-h-[300px] min-w-[360px] rounded-lg"
      isOpen={modalOpen}
      placement="center"
      onOpenChange={() => setModalOpen(false)}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex  justify-center font-bold">
              <p className="text-2xl font-semibold">Join a team</p>
            </ModalHeader>
            <ModalBody className="flex flex-col h-full ">
              {teams.length > 0 ? (
                teams?.map((team: TeamsType) => (
                  <div
                    key={team.id}
                    className=" flex flex-row justify-between grow border border-white rounded-lg p-1"
                  >
                    <p>
                      <strong>Name: </strong> {team.name}
                    </p>
                    <Button
                      className="w-10 text-app-text-color font-bold"
                      size="sm"
                      color="success"
                    >
                      Join
                    </Button>
                  </div>
                ))
              ) : (
                <div className=" flex flex-col justify-center grow my-auto mx-auto ">
                  <p className="mx-auto text-xl">No Teams available</p>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                className="w-10 mx-auto font-semibold"
                color="primary"
                onPress={() => setModalOpen(false)}
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default JoinTeamModal;
