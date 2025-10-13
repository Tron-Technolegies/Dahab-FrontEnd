import React, { useEffect } from "react";
import ServiceHeader from "../../components/services/ServiceHeader";
import HostingServices from "../../components/services/HostingServices";
import WhyChooseUsService from "../../components/services/WhyChooseUsService";
import { use } from "react";

export default function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ServiceHeader />
      <HostingServices />
      <WhyChooseUsService />
    </div>
  );
}
