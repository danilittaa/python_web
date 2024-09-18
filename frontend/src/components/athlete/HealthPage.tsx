import { getUser } from "@/services/getUser";
import { useEffect, useState } from "react";
import axios from "@/axiosConfig";
import { MedicalItem } from "./MedicalItem";
import { HeartRateIcon } from "@/lib/icons/heartRateIcon";
import { SleepingIcon } from "@/lib/icons/sleepingIcon";
import { WaterIcon } from "@/lib/icons/waterIcon";
import { CaloriesIcon } from "@/lib/icons/caloriesIcon";
import { WeightIcon } from "@/lib/icons/weightIcon";
import { TemperatureIcon } from "@/lib/icons/temperatureIcon";

const HealthPage: React.FC = () => {
  const user = getUser() || "";
  const [medicalData, setMedicalData] = useState<any>([]);

  useEffect(() => {
    const getMedicalData = async () => {
      try {
        setMedicalData(
          (await axios.get("/medical-data/?user_id=" + user.id)).data
        );
      } catch (error) {
        console.error(error);
      }
    };
    getMedicalData();
  }, []);

  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-4xl">Welcome Back, {user.username}</h2>
        <div className="flex flex-wrap gap-7 py-7">
          {medicalData?.map((item: any) => {
            let icon = <></>;
            let name = "";
            if (item.measurement_type === "heart_rate") {
              icon = <HeartRateIcon />;
              name = "Частота серцебиття";
            }
            if (item.measurement_type === "hours_slept") {
              icon = <SleepingIcon />;
              name = "Години сну";
            }
            if (item.measurement_type === "water_intake") {
              icon = <WaterIcon />;
              name = "Літрів води випито";
            }
            if (item.measurement_type === "calories") {
              icon = <CaloriesIcon />;
              name = "Витрачено калорій";
            }
            if (item.measurement_type === "weight") {
              icon = <WeightIcon />;
              name = "Вага";
            }
            if (item.measurement_type === "temperature") {
              icon = <TemperatureIcon />;
              name = "Температура";
            }

            return <MedicalItem icon={icon} name={name} value={item.value} />;
          })}
        </div>
      </div>
      <div>
        <img
          src="images/human_body.png"
          alt="human body"
          className="w-[400px] rounded-3xl"
        />
      </div>
    </div>
  );
};

export { HealthPage };
