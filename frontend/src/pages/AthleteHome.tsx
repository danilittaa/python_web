import { ChatPage } from "@/components/athlete/ChatPage";
import { HealthPage } from "@/components/athlete/HealthPage";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageNavigation } from "@/components/layout/PageNavigation";
import { usePageContext } from "@/context/pageContext";

const AthleteHome: React.FC = () => {
  const { activePage } = usePageContext();
  return (
    <div className="bg-gray-200/50 h-screen overflow-y-hidden">
      <PageHeader />
      <PageNavigation isAthlete />
      <div className="pl-32 pr-32">
        {activePage === "health" && <HealthPage />}
        {activePage === "chat" && <ChatPage />}
      </div>
    </div>
  );
};

export { AthleteHome };
