/** @format */

import * as React from "react";
import Image from "next/image";
import productB from "@/public/assets/dashboard/productList.png";

function ProductIcon() {
  return <Image src={productB} width={24} height={24} alt="productB" />;
}

export default ProductIcon;
