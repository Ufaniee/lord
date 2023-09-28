/** @format */

import logo from "../../public/assets/siteLogo.jpg";
import fourDots from "../../public/assets/fourDots.svg";
import shoppingBag from "../../public/assets/icons/shopping_bag.svg";
import emailIcon from "../../public/assets/icons/email.svg";
import Button from "../global/Button";
import SearchInput from "../SearchInput";
import Link from "next/link";
import Image from "next/image";

const TopNav = () => {
  return (
    <section className="hidden lg:flex justify-between items-center">
      <Link href="/">
        <Image src={logo} alt="logo" width={64} height={64} />
      </Link>
      <div className="flex gap-4">
        <Image src={fourDots} alt="Four Dots icon" />
        {/* Search Input */}
        <SearchInput />
      </div>
      <div className="flex justify-between items-center gap-1">
        <div className="flex gap-10">
          <Link href="/cart" className="relative">
            <Image src={shoppingBag} alt="Shopping back" />
            <span className="absolute bg-primary text-xs rounded-full p-1 -top-4 left-5">
              99
            </span>
          </Link>
          <Image src={emailIcon} alt="Email Icon" />
        </div>
        <Link href="Authentication/userlogin">
          <Button type="button" buttonText="Sign In" className="text-primary" />
        </Link>
        <Link href="Authentication/usersignup">
          <Button type="button" buttonText="Sign Up" className="bg-primary" />
        </Link>
      </div>
    </section>
  );
};

export default TopNav;
