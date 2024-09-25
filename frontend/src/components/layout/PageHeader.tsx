import { IconButton } from "@/lib/iconButton";
import LogoIcon from "@/lib/icons/logoIcon";
import { NotificationIcon } from "@/lib/icons/notificationIcon";
import { Link } from "react-router-dom";

const PageHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Link to={"/"}>
        <LogoIcon size={50} />
      </Link>
      <IconButton icon={<NotificationIcon size={30} />} />
    </div>
  );
};

export { PageHeader };
