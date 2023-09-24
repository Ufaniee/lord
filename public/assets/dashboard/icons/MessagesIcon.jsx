/** @format */

import * as React from "react";
import messageB from "@/public/assets/dashboard/email.png";
import Image from "next/image";

function MessagesIcon({ stroke = "#6C7281", ...rest }) {
  return <Image src={messageB} width={24} height={24} alt="productB" />;
}

export default MessagesIcon;
