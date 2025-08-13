import React, { useState } from "react";
import MiningSections from "../../../components/Admin/mining/MiningSections";
import RevenueSection from "../../../components/Admin/mining/RevenueSection/RevenueSection";
import PayoutSection from "../../../components/Admin/mining/Payout/PayoutSection";
import BTCPerHashRate from "../../../components/Admin/mining/BTC/BTCPerHashRate";
import S19KRevenueSection from "../../../components/Admin/mining/S19KRevenue/S19KRevenueSection";
import TermsSection from "../../../components/Admin/mining/terms/TermsSection";
import PrivacySection from "../../../components/Admin/mining/privacy/PrivacySection";

export default function MiningPage() {
  const [active, setActive] = useState("A1246 Revenue");
  return (
    <div>
      <MiningSections active={active} setActive={setActive} />
      {active === "A1246 Revenue" && <RevenueSection />}
      {active === "S19KPro Revenue" && <S19KRevenueSection />}
      {active === "Payout" && <PayoutSection />}
      {active === "BTC" && <BTCPerHashRate />}
      {active === "T&C" && <TermsSection />}
      {active === "privacy" && <PrivacySection />}
    </div>
  );
}
