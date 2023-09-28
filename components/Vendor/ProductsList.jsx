/** @format */

import React from "react";
import { MdStarRate } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Button from "../global/Button";
import ProductNotFound from "../product/ProductNotFound";
import Link from "next/link";
import products from "../../data/vendorProducts.json";
import Image from "next/image";
import plusIcon from "@/public/assets/plus.png";


const ProductList = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-colorBold font-semibold text-2xl">Product List</h3>

        <div className=" md:inline-block hidden text-black font-bold bg-primary p-4 rounded-full">
          Add Product
        </div>
      
        <div className="sm:hidden  bg-primary p-4 rounded-full">
          <Image src={plusIcon} width={24} height={24} />
        </div>
      </div>
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 content-between mt-5">
            {products.map((product, index) => (
              <Link key={index} href={`/vendor/Dashboard/products/${product.id}`}>
              {/* <Link key={index} href={`/products/${product.id}`}> */}
                <div className="flex flex-col items-center gap-4 p-8 border border-gray rounded-3xl bg-white">
                  <div className="w-[150px] h-[150px]">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h4 className="">{product.name}</h4>
                    <span className="text-primary">${product.price}</span>
                    <span className="flex items-center gap-1 text-colorNormal text-xs">
                      {/* <MdStarRate className="text-primary" /> */}
                      
                      <span className="mr-4">
                      Avaliable:  <span className="text-black font-bold">{product.avaliableProducts}</span>
                      </span>
                      <span className="ml-4">
                         Sold: <span className="text-black font-bold">{product.sold}</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-4">
                      <Button
                        buttonText="Veiw Details"
                        type="button"
                        className="bg-primary py-2 text-sm"
                      />
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
  );
};

export default ProductList;
