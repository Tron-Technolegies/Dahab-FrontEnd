import React, { useEffect } from "react";
import ServiceHeader from "../../components/services/ServiceHeader";
import HostingServices from "../../components/services/HostingServices";
import WhyChooseUsService from "../../components/services/WhyChooseUsService";
import { use } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ServicePage() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <link rel="canonical" href={fullUrl} />
        <title>Crypto Mining Services in UAE & Ethiopia | Hosting, Repair & Digital Miners</title>
        <meta
          name="description"
          content="Start mining Bitcoin easily with Dahab Miners. Explore low-cost hosting in Ethiopia & UAE, digital mining solutions, and expert ASIC repair services. No setup needed."
        />
        <meta
          name="keywords"
          content="Crypto miners UAE,
Bitcoin Mining in Dubai,
Miner repair service UAE,
Host miners in Ethiopia,
Bitcoin Mining in Dubai,
Bitcoin Mining in Ethiopia,
Dahab Digital Mining,
Digital Dahab Miner"
        />
      </Helmet>
      <ServiceHeader />
      <HostingServices />
      <WhyChooseUsService />
    </div>
  );
}
