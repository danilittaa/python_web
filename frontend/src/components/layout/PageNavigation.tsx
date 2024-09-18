import { IconButton } from "@/lib/iconButton";
import { MessageIcon } from "@/lib/icons/messageIcon";
import { ReportIcon } from "@/lib/icons/reportIcon";
import { HeartIcon } from "lucide-react";

const PageNavigation: React.FC = () => {
  return (
    <div className="w-20 flex items-center h-screen pl-7 absolute">
      <div className="space-y-5">
        <IconButton icon={<HeartIcon />} isActive />
        <IconButton icon={<MessageIcon />} />
        <IconButton icon={<ReportIcon />} />
      </div>
    </div>
  );
};

export { PageNavigation };
