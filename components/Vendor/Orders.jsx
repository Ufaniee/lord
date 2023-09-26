/** @format */

import React from "react";

function D_Orders() {
  return (
    <div className="bg-white shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-[#B165E9] bg-opacity-30 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-6 py-3 bg-[#B165E9] bg-opacity-30 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 bg-[#B165E9] bg-opacity-30 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-t font-medium border-gray">
              BD892537
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-t border-gray">
              Standard
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-t border-gray">
              Ready
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-t font-medium border-gray">
              BD892537
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-t border-gray">
              Gift
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-t border-gray">
              Pending
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-t font-medium border-gray">
              BD892537
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-t border-gray">
              Standard
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-t border-gray">
              Shipped
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default D_Orders;
