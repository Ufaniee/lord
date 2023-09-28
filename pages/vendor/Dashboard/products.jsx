/** @format */

import Layout2 from "../../../components/global/Layout2";
import React from "react";
import VendorLayout from "../../../components/VendorLayout";
import ProductList from "@/components/Vendor/ProductsList";

const Products = () => {
  return (
    <div>
      <Layout2>
        <VendorLayout>
          <ProductList />
        </VendorLayout>
      </Layout2>
    </div>
  );
};

export default Products;
