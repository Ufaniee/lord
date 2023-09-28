/** @format */

import React from "react";
import { useRouter } from "next/router";
import ProductInfo from "@/components/Vendor/ProductInfo";
import Layout2 from "@/components/global/Layout2";
import DetailTabs from "@/components/product/DetailTabs";
import VendorLayout from "@/components/VendorLayout";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout2>
      <VendorLayout>
        <ProductInfo id={id} />
        <DetailTabs />
      </VendorLayout>
    </Layout2>
  );
};

export default ProductDetail;

// export async function getServerSideProps(context) {
//     console.log('context', context)
//     const { id } = context.params;
//     return {props: {id}};
// }
