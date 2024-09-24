import { HealthPage } from "@/components/athlete/HealthPage";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageNavigation } from "@/components/layout/PageNavigation";

const AthleteHome: React.FC = () => {
  return (
    <div className="bg-gray-200/50 h-screen overflow-y-hidden">
      <PageHeader />
      <PageNavigation />
      <div className="pl-32 pr-32">
        <HealthPage />
      </div>
    </div>
  );
};

export { AthleteHome };
