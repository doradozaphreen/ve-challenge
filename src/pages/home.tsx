import Userform from "../components/user-form";
import userImage from "@/assets/pics/pic1.svg";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <img className="mx-auto" src={userImage} alt="logo" />
      <Userform />
    </div>
  );
};

export default Home;
