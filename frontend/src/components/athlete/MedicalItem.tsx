type Props = {
  icon: React.ReactNode;
  name: string;
  value: number;
};

const MedicalItem: React.FC<Props> = ({ icon, name, value }) => {
  return (
    <div className="bg-white p-3 rounded-xl flex gap-4">
      <div className="rounded-xl bg-blue-300 size-14 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-gray-400">{name}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export { MedicalItem };
