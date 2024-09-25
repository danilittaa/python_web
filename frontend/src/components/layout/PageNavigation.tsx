import { usePageContext } from "@/context/pageContext";
import { IconButton } from "@/lib/iconButton";
import { MessageIcon } from "@/lib/icons/messageIcon";
import { ReportIcon } from "@/lib/icons/reportIcon";
import { HeartIcon } from "lucide-react";

type Props = {
  isAthlete?: boolean;
};

const PageNavigation: React.FC<Props> = ({ isAthlete }) => {
  const { activePage, setActivePage } = usePageContext();
  return (
    <div className="w-20 flex items-center h-screen pl-7 fixed">
      <div className="space-y-5">
        {isAthlete && (
          <IconButton
            icon={<HeartIcon />}
            isActive={activePage === "health"}
            onClick={() => setActivePage("health")}
          />
        )}
        <IconButton
          icon={<MessageIcon />}
          isActive={activePage === "chat"}
          onClick={() => setActivePage("chat")}
        />
        {isAthlete && (
          <IconButton
            icon={<ReportIcon />}
            isActive={activePage === "report"}
            onClick={() => setActivePage("report")}
          />
        )}
      </div>
    </div>
  );
};

export { PageNavigation };
