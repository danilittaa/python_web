import React, { createContext, useState, useContext } from "react";

interface PageContextType {
  activePage: "health" | "chat" | "report";
  setActivePage: React.Dispatch<
    React.SetStateAction<"health" | "chat" | "report">
  >;
}

const PageContext = createContext<PageContextType>({
  activePage: "health",
  setActivePage: () => {},
});

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [activePage, setActivePage] = useState<"health" | "chat" | "report">(
    "health"
  );

  return (
    <PageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext);
}
