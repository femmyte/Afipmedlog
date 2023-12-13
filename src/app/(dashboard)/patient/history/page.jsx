import ComingSoon from "@/components/common/ComingSoon";
import React from "react";
import HistoryPage from "@/components/pages/patient/history/HistoryPage";
import HistoryTable from "@/components/pages/patient/history/HistoryTable";

const page = () => {
  return (
    <div>
      <HistoryPage />
      <HistoryTable />
    </div>
  );
};

export default page;
