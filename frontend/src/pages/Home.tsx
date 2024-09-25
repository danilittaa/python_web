import { getUser } from "@/services/getUser";
import { AthleteHome } from "./AthleteHome";
import { CoachHome } from "./CoachHome";

const Home = () => {
  const role = getUser()?.role || "";
  const isAthlete = role === "athlete";

  if (isAthlete) {
    return <AthleteHome />;
  }

  return <CoachHome />;
};

export default Home;
