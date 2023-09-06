/** @format */

import React from "react";
import { MdStarRate } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Button from "../components/global/Button";
import ProductNotFound from "../components/product/ProductNotFound";
import Link from "next/link";
import products from "../data/products.json";
import Layout from "../components/global/Layout";
import Image from "next/image";

// const products = [
//   { id:"1", name: "Smartphone Camera", price: 1000.00, star: 5.0, sold: 99, img:'' },
//   { id:"2", name: "Smartphone TV", price: 1000.00, star: 5.0, sold: 99, img:'' },
//   { id:"5", name: "Smartphone TV", price: 1000.00, star: 5.0, sold: 99, img:'' },
//   { id:"3", name: "Smartphone 5G", price: 1000.00, star: 5.0, sold: 99, img:'' },
//   { id:"6", name: "Smartphone Con", price: 1000.00,star: 5.0, sold: 99, img:'' },
//   { id:"7", name: "Smartphone Con",  price: 1000.00, star: 5.0, sold: 99, img:'' }
// ]

const ProductList = () => {
  return (
    <Layout>
      <div className="mt-10">
        <div className="flex justify-between">
          <h3 className="text-colorBold font-semibold text-2xl">
            Product List
          </h3>
          <span className="text-primary">View All</span>
        </div>
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 content-between mt-5">
              {products.map((product, index) => (
                <Link key={index} href={`/products/${product.id}`}>
                  <div className="flex flex-col items-center gap-4 p-8 border border-gray rounded-3xl">
                    <div className="w-[150px] h-[150px]">
                      <Image
                        src={product.img}
                        alt={product.name}
                        width={150}
                        height={150}
                      />
                    </div>{" "}
                    <div className="flex flex-col items-center gap-2">
                      <h4 className="">{product.name}</h4>
                      <span className="text-primary">${product.price}</span>
                      <span className="flex items-center gap-1 text-colorNormal text-xs">
                        <MdStarRate className="text-primary" />
                        <span>
                          {product.star} | Sold {product.sold}
                        </span>
                      </span>
                      <span className="flex items-center gap-4">
                        <Button
                          buttonText="Buy"
                          type="button"
                          className="bg-primary py-2 text-sm"
                        />
                        <FaHeart className="text-colorNormal" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <FaAngleLeft />
              <div className="flex justify-center gap-2 my-3">
                {Array.from({ length: products.length }).map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-md bg-[#fff] px-3 py-1 border border-gray ${
                      index === 1 ? "bg-primary" : ""
                    }`}
                  >
                    {index}
                  </div>
                ))}
              </div>
              <FaAngleRight />
            </div>
          </>
        ) : (
          <ProductNotFound />
        )}
      </div>
    </Layout>
  );
};

export default ProductList;
