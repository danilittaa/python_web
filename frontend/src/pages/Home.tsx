import { getUser } from "@/services/getUser";
import { AthleteHome } from "./AthleteHome";

const Home = () => {
  const role = getUser()?.role || "";
  const isAthlete = role === "athlete";

  if (isAthlete) {
    return <AthleteHome />;
  }

  return (
    <>
      <p>home</p>
      <p>
        role: <span>{role}</span>
      </p>
    </>
  );
};

export default Home;
