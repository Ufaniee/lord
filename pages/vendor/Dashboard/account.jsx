/** @format */

import Layout2 from "../../../components/global/Layout2";
import React from "react";
import VendorLayout from "../../../components/VendorLayout";
import ordersNew from "@/public/assets/ordersNew.png";
import Image from "next/image";
import OrderGraph from "@/public/assets/OrderGraph.png";
import trendDown from "@/public/assets/trendDown.png";
import trendUp from "@/public/assets/trendUp.png";

const Account = () => {
  return (
    <div>
      <Layout2>
        <VendorLayout>
          <div>
            <div>
              <h1 className="font-bold text-xl">Account</h1>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 mt-8">
                <div>
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <center>
                      <h1 className=" text-md">Balance</h1>
                      <h1 className="font-bold text-xl p-2 rounded-full">
                        $2,000.00
                      </h1>
                    </center>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 mt-4">
                      <div>
                        <div className="p-2 bg-primary rounded-full ">
                          <center>
                            <h1>Withdraw</h1>
                          </center>
                        </div>
                      </div>
                      <div>
                        <div className="p-2 bg-primary rounded-full ">
                          <center>
                            <h1>Add Funds</h1>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center bg-white shadow-lg rounded-lg  p-4 mt-4">
                    <div className="bg-[#B165E9] p-4 m-2 rounded-full">
                      <Image
                        src={ordersNew}
                        width={30}
                        height={30}
                        alt="ordersNew"
                      />
                    </div>
                    <div className="mr-2 sm:mr-4">
                      <p className="font-bold text-xl ">$3,400</p>
                      <p>Total Sales</p>
                    </div>
                    <div>
                      <Image
                        src={OrderGraph}
                        width={100}
                        height={40}
                        alt="OrderGraph"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center bg-white shadow-lg rounded-lg  p-4 mt-4">
                    <div className="bg-[#B165E9] p-4 m-2 rounded-full">
                      <Image
                        src={ordersNew}
                        width={30}
                        height={30}
                        alt="ordersNew"
                      />
                    </div>
                    <div className="mr-2 sm:mr-4">
                      <p className="font-bold text-xl ">34</p>
                      <p>Views</p>
                    </div>
                    <div>
                      <Image
                        src={OrderGraph}
                        width={100}
                        height={40}
                        alt="OrderGraph"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center bg-white shadow-lg rounded-lg  p-4 mt-4">
                    <div className="bg-[#B165E9] p-4 m-2 rounded-full">
                      <Image
                        src={ordersNew}
                        width={30}
                        height={30}
                        alt="ordersNew"
                      />
                    </div>
                    <div className="mr-2 sm:mr-4">
                      <p className="font-bold text-xl ">34</p>
                      <p>Views</p>
                    </div>
                    <div>
                      <Image
                        src={OrderGraph}
                        width={100}
                        height={40}
                        alt="OrderGraph"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="bg-white shadow-lg">
                  <h1 className="p-4">Transaction history</h1>
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
                            <Image
                              src={trendDown}
                              width={30}
                              height={30}
                              alt="ordersNew"
                            />
                          </td>
                          <td className=" px-4 py-2">
                            <h1>Withdraw</h1>
                            <p className="text-gray">To Access Bank</p>
                          </td>
                          <td className=" px-4 py-2">$30</td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2">
                            <Image
                              src={trendDown}
                              width={30}
                              height={30}
                              alt="ordersNew"
                            />
                          </td>
                          <td className=" px-4 py-2">
                            <h1>Withdraw</h1>
                            <p className="text-gray">To Access Bank</p>
                          </td>
                          <td className=" px-4 py-2">$30</td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2">
                            <Image
                              src={trendDown}
                              width={30}
                              height={30}
                              alt="ordersNew"
                            />
                          </td>
                          <td className=" px-4 py-2">
                            <h1>Promotion</h1>
                            <p className="text-gray">To Products Promotion</p>
                          </td>
                          <td className=" px-4 py-2">$30</td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2">
                            <Image
                              src={trendUp}
                              width={30}
                              height={30}
                              alt="ordersNew"
                            />
                          </td>
                          <td className=" px-4 py-2">
                            <h1>Deposite</h1>
                            <p className="text-gray">To Access Bank</p>
                          </td>
                          <td className=" px-4 py-2">$30</td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </VendorLayout>
      </Layout2>
    </div>
  );
};

export default Account;
