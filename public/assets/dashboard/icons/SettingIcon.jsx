import * as React from "react";
import Image from "next/image";
import settingB from "@/public/assets/dashboard/setting.png";

function SettingIcon() {
  return (
    <Image src={settingB} width={24} height={24} alt="settingB" />
  );
}

export default SettingIcon;
