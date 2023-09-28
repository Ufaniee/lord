/** @format */

import MobileNav2 from "../home/MobileNav2";
import GlobalFooter from "./GlobalFooter";
import GlobalNav2 from "./GlobalNav2";
import GlobalNewsletter from "./GlobalNewsletter";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <GlobalNav2 />
        <MobileNav2 />
      </div>
      <div >{children}</div>

      <GlobalFooter />
    </>
  );
};

export default Layout;
