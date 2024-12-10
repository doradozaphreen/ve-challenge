import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import image from "/public/rori.png";

const Userform: React.FC = () => {
  return (
    <div className="flex flex-col w-10/12 md:w-6/12 mx-auto justify-center gap-2">
      <img
        className="mx-auto"
        width={260}
        height={260}
        src={image}
        alt="logo"
      />
      <h1 className="text-3xl font-bold text-center my-2">
        Start by typing your name
      </h1>
      <Input placeholder="Type your username" />
      <Button
        className="w-10 mx-auto text-lg font-semibold text-white my-2"
        size="lg"
        color="primary"
      >
        Start
      </Button>
    </div>
  );
};

export default Userform;
