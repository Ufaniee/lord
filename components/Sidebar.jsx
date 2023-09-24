/** @format */

import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {
  ProductsIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  MessagesIcon,
  VideosIcon,
} from "../public/assets/dashboard/icons";
import Image from "next/image";

const menuItems = [
  { id: 1, label: "Dashboard", icon: HomeIcon, link: "/Sellers/Dashboard" },
  {
    id: 2,
    label: "Product",
    icon: ProductsIcon,
    link: "/Sellers/Dashboard/products",
  },
  {
    id: 3,
    label: "Messages",
    icon: MessagesIcon,
    link: "/Sellers/Dashboard/messages",
  },
  {
    id: 4,
    label: "Setting",
    icon: VideosIcon,
    link: "/Sellers/Dashboard/settings",
  },
  {
    id: 5,
    label: "Log Out",
    icon: LogoutIcon,
    link: "/Sellers/Authentication/login",
  },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h- px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    console.log("menu:", menu); // Add this line for debugging
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  // console.log("router.pathname:", router.pathname);
  // console.log("activeMenu:", activeMenu);

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const isActive = (link) => router.pathname === link;

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Dashboard
            </span>
          </div>
          {
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          }
        </div>

        {/* Profile pictue */}

        <div className="pt-10 items-center">
          <center>
            <Image
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1695166009/utilities/user_s1xzqe.png"
              width={200}
              height={100}
              alt="vendor"
              className="rounded-full"
            />
          </center>
          <div className="pt-2">
            <h1
              className={classNames(
                "mt-2 text-lg text-text text-center font-bold",
                {
                  hidden: toggleCollapse,
                }
              )}
            >
              Daniel Smart
            </h1>
            <p
              className={classNames("text-lg text-center f", {
                hidden: toggleCollapse,
              })}
            >
              Personal Store
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start mt-4">
          {menuItems.map(({ id, icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={id} className={classes}>
                <Link href={menu.link}>
                  <div className="flex py-3 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div> */}
    </div>
  );
};

export default Sidebar;
