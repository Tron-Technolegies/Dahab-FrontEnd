import React, { useState } from "react";
import MiningSections from "../../../components/Admin/mining/MiningSections";
import RevenueSection from "../../../components/Admin/mining/RevenueSection/RevenueSection";
import PayoutSection from "../../../components/Admin/mining/Payout/PayoutSection";
import BTCPerHashRate from "../../../components/Admin/mining/BTC/BTCPerHashRate";

export default function MiningPage() {
  const [active, setActive] = useState("Revenue");
  return (
    <div>
      <MiningSections active={active} setActive={setActive} />
      {active === "Revenue" && <RevenueSection />}
      {active === "Payout" && <PayoutSection />}
      {active === "BTC" && <BTCPerHashRate />}
    </div>
  );
}
