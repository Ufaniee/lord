/** @format */

import * as React from "react";
import money from "@/public/assets/dashboard/money.png";
import Image from "next/image";

function AccountIcon({ stroke = "#6C7281", ...rest }) {
  return <Image src={money} width={24} height={24} alt="productB" />;
}

export default AccountIcon;
