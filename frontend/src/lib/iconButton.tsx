type Props = {
  icon: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
};

const IconButton: React.FC<Props> = ({ icon, onClick, isActive }) => {
  return (
    <div onClick={onClick} className="rounded-full bg-white p-2 cursor-pointer">
      <div
        className={`rounded-full hover:bg-gray-300 p-2 flex items-center justify-center size-11 ${
          isActive ? "bg-blue-300" : "bg-gray-200"
        }`}
      >
        {icon}
      </div>
    </div>
  );
};

export { IconButton };
