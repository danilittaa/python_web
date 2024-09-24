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
import Calendar from "react-calendar";
import AddMedicalData from "../popups/AddMedicalData";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const HealthPage: React.FC = () => {
  const user = getUser() || "";
  const [medicalData, setMedicalData] = useState<any>([]);
  const [date, setDate] = useState<Value>(new Date());
  const [isAddMedicalPopupOpen, setIsMedicalPopupOpen] = useState(false);

  const getMedicalData = async () => {
    try {
      const data = (await axios.get("/medical-data/?user_id=" + user.id)).data;
      const latestMedicalData = data
        .filter((item: any) => {
          const itemDate = new Date(item.measurement_date).toDateString();
          const selectedDate = new Date(date as Date).toDateString();

          return itemDate === selectedDate;
        })
        .reduce((acc: any, item: any) => {
          acc[item.measurement_type] = item;
          return acc;
        }, {});
      setMedicalData(Object.values(latestMedicalData));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMedicalData();
  }, [date]);

  return (
    <div className="flex justify-between mt-6">
      <div>
        <div className="flex justify-between px-6">
          <h2 className="text-4xl mr-4">Вітаємо Вас, {user.username}</h2>

          <button
            onClick={() => setIsMedicalPopupOpen(true)}
            className="border border-gray-600 rounded-xl hover:border-blue-300 hover:text-blue-300 px-4 py-2"
          >
            Додати показник
          </button>
          <AddMedicalData
            isOpen={isAddMedicalPopupOpen}
            onClose={() => setIsMedicalPopupOpen(false)}
            currentDate={date}
            onSuccess={getMedicalData}
          />
        </div>
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
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export { HealthPage };
