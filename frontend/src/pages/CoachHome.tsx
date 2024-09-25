import { ChatPage } from "@/components/athlete/ChatPage";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageNavigation } from "@/components/layout/PageNavigation";
import { usePageContext } from "@/context/pageContext";

const CoachHome: React.FC = () => {
  const { activePage } = usePageContext();
  return (
    <div className="bg-gray-200/50 h-screen overflow-y-hidden">
      <PageHeader />
      <PageNavigation />
      <div className="pl-32 pr-32">{activePage === "chat" && <ChatPage />}</div>
    </div>
  );
};

export { CoachHome };
