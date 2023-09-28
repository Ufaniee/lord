/** @format */

import Layout from "../../components/global/Layout";
import ProductPage from "../../components/product/ProductPage";
import React from "react";
import VendorLayout from "@/components/VendorLayout";

const products = () => {
  return (
    <Layout>
      <VendorLayout>
        <ProductPage />
      </VendorLayout>
    </Layout>
  );
};

export default products;
