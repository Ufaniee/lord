/** @format */

import Layout2 from "../../../components/global/Layout2";
import React from "react";
import VendorLayout from "../../../components/VendorLayout";
import trendDown from "@/public/assets/trendDown.png";
import trendUp from "@/public/assets/trendUp.png";
import Image from "next/image";


const Messages = () => {
  return (
    <div>
      <Layout2>
        <VendorLayout>
          <div className="bg-white shadow-lg ">
            <h1 className="p-4">Messages</h1>
            <div className="max-w-screen-lg mx-auto">
              <table className="min-w-full table-auto">
                {/* <thead>
                        <tr>
                          <th className="px-4 py-2">Name</th>
                          <th className="px-4 py-2">Age</th>
                          <th className="px-4 py-2">Email</th>
                        </tr>
                      </thead> */}
                <tbody>
                  <tr>
                    <td className=" px-4 py-2">
                      CC
                    </td>
                    {/* <td className=" px-4 py-2 md:inline-block hidden">BD24534256</td> */}

                    <td className=" px-4 py-2">
                      <h1>Order</h1>
                      <p className="text-gray">I need a red cake of with silver iceing and colour</p>
                    </td>
                    <td className=" px-4 py-2"><p className="text-green">Ready</p></td>
                  </tr>
                  <tr>
                    <td className=" px-4 py-2">
                      CC
                    </td>
                    <td className=" px-4 py-2">
                      <h1>Order</h1>
                      <p className="text-gray">To Access Bank</p>
                    </td>
                    <td className=" px-4 py-2">Pending</td>
                  </tr>
                  <tr>
                    <td className=" px-4 py-2">
                      {/* <Image
                        src={trendDown}
                        width={30}
                        height={30}
                        alt="ordersNew"
                      /> */}
                      CC
                    </td>
                    <td className=" px-4 py-2">
                      <h1>Custom Order</h1>
                      <p className="text-gray">To Products Promotion</p>
                    </td>
                    <td className=" px-4 py-2">Pending</td>
                  </tr>
                  <tr>
                    <td className=" px-4 py-2">
                      CC
                    </td>
                    <td className=" px-4 py-2">
                      <h1>Custom Order</h1>
                      <p className="text-gray">To Access Bank</p>
                    </td>
                    <td className=" px-4 py-2"><p className="text-red">Cancled</p></td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </VendorLayout>
      </Layout2>
    </div>
  );
};

export default Messages;
