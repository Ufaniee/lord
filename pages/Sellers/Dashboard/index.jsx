/** @format */

import Layout2 from "../../../components/global/Layout2";
import React from "react";
import VendorLayout from "../../../components/VendorLayout";
import Image from "next/image";
import salesIcon from "@/public/assets/sales.png";
import BalaceIcon from "@/public/assets/Balace.png";
import productsIcons from "@/public/assets/products.png";
import orderIcons from "@/public/assets/order.png";
import LineChart from "@/components/Vendor/LineChart"


const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
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
                    <Image src={BalaceIcon} width={24} height={24} alt="BalaceIcon" />
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
                    <Image src={productsIcons} width={24} height={24} alt="productsIcons" />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl ">34</h1>
                    <p>Products</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-200 p-4 mx-2 bg-white shadow-lg  rounded-lg">
                <div className="flex flex-row">
                  <div className="bg-[#F2F7FA] p-4 mr-2 rounded-full ">
                    <Image src={orderIcons} width={24} height={24} alt="orderIcons" />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl ">680</h1>
                    <p>Total Orders</p>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <center>
              <div className="bg-white mt-6 mb-20 md:px-20">
                <LineChart/>
              </div>
              </center>
            </section>
          </div>
        </VendorLayout>
      </Layout2>
    </div>
  );
};

export default index;
