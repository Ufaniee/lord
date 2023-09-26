/** @format */

import Layout2 from "../../../components/global/Layout2";
import React from "react";
import VendorLayout from "../../../components/VendorLayout";
import Image from "next/image";
import salesIcon from "@/public/assets/sales.png";
import BalaceIcon from "@/public/assets/Balace.png";
import productsIcons from "@/public/assets/products.png";
import orderIcons from "@/public/assets/order.png";
import LineChart from "@/components/Vendor/LineChart";
import OrderGraph from "@/public/assets/OrderGraph.png";
import ordersNew from "@/public/assets/ordersNew.png";
import conversationIcon from "@/public/assets/conversation.png";

const chartData = {
  labels: ["January", "February", "March", "April", "May"],
  values: [65, 59, 80, 81, 56],
};

const index = () => {
  return (
    <div>
      <Layout2>
        <VendorLayout>
          <h1 className="font-bold">Main Dashboard</h1>

          <div className="mt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              <div className="bg-blue-200 p-4 mx-2 bg-white shadow-lg  rounded-lg">
                <div className="flex flex-row">
                  <div className="bg-[#F2F7FA] p-4 mr-2 rounded-full ">
                    <Image src={salesIcon} width={24} height={24} alt="sales" />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl ">$2,700</h1>
                    <p>Total Sales</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-200 p-4 mx-2 bg-white shadow-lg  rounded-lg">
                <div className="flex flex-row">
                  <div className="bg-[#F2F7FA] p-4 mr-2 rounded-full ">
                    <Image
                      src={BalaceIcon}
                      width={24}
                      height={24}
                      alt="BalaceIcon"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl ">$460</h1>
                    <p>Balance</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-200 p-4 mx-2 bg-white shadow-lg  rounded-lg">
                <div className="flex flex-row">
                  <div className="bg-[#F2F7FA] p-4 mr-2 rounded-full ">
                    <Image
                      src={productsIcons}
                      width={24}
                      height={24}
                      alt="productsIcons"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">34</h1>
                    <p>Products</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-200 p-4 mx-2 bg-white shadow-lg  rounded-lg">
                <div className="flex flex-row">
                  <div className="bg-[#F2F7FA] p-4 mr-2 rounded-full ">
                    <Image
                      src={orderIcons}
                      width={24}
                      height={24}
                      alt="orderIcons"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">680</h1>
                    <p>Total Orders</p>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <center>
                <div className="bg-white mt-6 mb-6 md:px-20  shadow-lg">
                  <LineChart />
                </div>
              </center>
            </section>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2">
              <div className="flex flex-row items-center bg-white shadow-lg rounded-lg ">
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
                  <p>New Orders</p>
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
              <div className="flex flex-row items-center bg-white shadow-lg rounded-lg ">
                <div className="bg-[#53CBDE] p-4 m-2 rounded-full">
                  <Image
                    src={conversationIcon}
                    width={30}
                    height={30}
                    alt="conversationIcon"
                  />
                </div>
                <div className="mr-2 sm:mr-4">
                  <p className="font-bold text-xl ">58</p>
                  <p>New Messages</p>
                </div>
              </div>
            </div>

            <section>
              <div></div>
            </section>
          </div>
        </VendorLayout>
      </Layout2>
    </div>
  );
};

export default index;
