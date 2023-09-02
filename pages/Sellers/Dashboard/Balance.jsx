/** @format */

import Layout from "../../../components/global/Layout";
import VendorLayout from "../../../components/VendorLayout";
import React, { useState } from "react";
import VenTopNav from "../../../components/Vendor/VenTopNav";
import AvalibleProductGraph from "@/components/Vendor/AvalibleProductGraph";
import NewOrders from "@/components/Vendor/NewOrders";

const Balance = () => {
  return (
    <Layout>
      <VendorLayout>
        <VenTopNav />
      </VendorLayout>
    </Layout>
  );
};

export default Balance;
