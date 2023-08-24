/** @format */

import Layout from "../../../components/global/Layout";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomerSupport = () => {
  const tasks = [
    {
      id: 1,
      ticket: "0039203746ee4",
      username: "henry35",
      category: "Order Request",
      label: "Very Important",
      status: "Open",
    },
    {
      id: 2,
      ticket: "0039203746ee4",
      username: "chisom35",
      category: "Complain",
      label: "Important",
      status: "Pending",
    },
    {
      id: 3,
      ticket: "0039203746ee4",
      username: "mary3095",
      category: "Enquires",
      label: "Basic",
      status: "Open",
    },
    // Add more tasks as needed
  ];

  const router = useRouter();

  const handleRowClick = (category) => {
    const route = getCategoryRoute(category);
    router.push(route);
  };

  const getCategoryRoute = (category) => {
    if (category === "Order Request") {
      return "/Admin/CustomerSupport/HandleOrder";
    } else if (category === "Complain") {
      return "/Admin/CustomerSupport/HandleComplain";
    } else if (category === "Enquires") {
      return "/Admin/CustomerSupport/HandleEnquire";
    }
    return "#"; // Default route
  };

  return (
    <Layout>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 md:w-2/3 bg-blue-300 p-4">
            <h2 className="font-['Poppins'] text-colorBold text-4xl font-semibold">
              Moses #0023
            </h2>
            <p className="lg:w-[350px] font-['Poppins'] text-colorBold">
              Your destination to dominate the selling space and shop for
              variety of products
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 md:w-1/3 bg-green-300 p-4">
            <h2 className="font-['Poppins'] text-colorBold text-2xl font-semibold">
              Rating
            </h2>
            <p className="font-['Poppins'] text-colorBold text-6xl font-semibold">
              98%
            </p>
          </div>
          
        </div>

        <br />
        <br />
        <br />
        <center>
          <h2 className="font-['Poppins'] text-colorBold text-4xl font-semibold">
            Tasks
          </h2>
          <br />
        </center>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-1/5 py-2 px-4 text-left">Ticket #</th>
                <th className="w-1/5 py-2 px-4 text-left">Username</th>
                <th className="w-1/5 py-2 px-4 text-left">Category</th>
                <th className="w-1/5 py-2 px-4 text-left">Label</th>
                <th className="w-1/5 py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleRowClick(task.category)}
                >
                  <td className="py-2 px-4">{task.ticket}</td>
                  <td className="py-2 px-4">{task.username}</td>
                  <td className="py-2 px-4">
                    <Link href={getCategoryRoute(task.category)}>
                      {task.category}
                    </Link>
                  </td>
                  <td className="py-2 px-4">{task.label}</td>
                  <td className="py-2 px-4">{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default CustomerSupport;
