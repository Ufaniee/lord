/** @format */

import * as React from "react";
import logoutIcon from "@/public/assets/dashboard/logout.png";
import Image from "next/image";

function LogoutIcon({ fill = "#6C7281", ...rest }) {
  return <Image src={logoutIcon} width={24} height={24} alt="LogoutIcon" />;
}

export default LogoutIcon;
