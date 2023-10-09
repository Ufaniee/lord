/** @format */

import React from "react";
import { MdStarRate } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Button from "../global/Button";
import ProductNotFound from "./ProductNotFound";
import Link from "next/link";
import Image from "next/image";


 const products = [
   { id:"1", name: "Smartphone Camera", description:"",price: 1000.00, star: 5.0,sold: 99, img:'/Images/78.jpg' },
   { id:"2", name: "Smartphone TV", price: 1000.00, star: 5.0, sold: 99, img:'/Images/81.jpg' },
   { id:"5", name: "Smartphone TV", price: 1000.00, star: 5.0, sold: 99, img:'/Images/91.jpg' },
   { id:"3", name: "Smartphone 5G", price: 1000.00, star: 5.0, sold: 99, img:'/Images/11.jpg' },
   { id:"6", name: "Smartphone Con", price: 1000.00,star: 5.0, sold: 99, img:'/Images/2.jpg' },
   { id:"7", name: "Smartphone Con",  price: 1000.00, star: 5.0, sold: 99, img:'/Images/3.jpg' },
   { id:"8", name: "Smartphone Camera", description:"",price: 1000.00, star: 5.0,sold: 99, img:'/Images/4.jpg' },
   { id:"7", name: "Smartphone Con",  price: 1000.00, star: 5.0, sold: 99, img:'/Images/5.jpg' },
   { id:"8", name: "Smartphone Camera", description:"",price: 1000.00, star: 5.0,sold: 99, img:'/Images/6.jpg' },
 ]

const ProductList = () => {
  return (
    
    <div className=' w-[100%] lg:w-[100%' >

      <div className="flex flex-col ">
          {products.length > 0 ? (
            <>
              <div className="flex flex-row flex-wrap rounded-lg w-[100%] lg:w-[full]">
                {products.map((product, index) => (
                  <Link key={index} href={`/products/${product.id}`}>
                    <div className="flex flex-col border border-gray rounded-3xl">
                      <div className="flex flex-col w-[250px] lg:w-[350px] lg:h-[250px] items-center text-center p-10 rounded-lg ">
                        <Image
                          src={product.img}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-center"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <h4 className="">{product.name}</h4>
                        <span className="text-primary">${product.price}</span>
                        <span className="text-primary">${product.description}</span>
                        <span className="flex items-center gap-1 text-colorNormal text-xs">
                          <MdStarRate className="text-yellow" />
                          <span>
                            {product.star} | Sold {product.sold}
                          </span>
                        </span>
                        <span className="flex items-center gap-4">
                          <Button
                            buttonText="Add to Cart"
                            type="button"
                            className="bg-primary py-2 text-sm"
                          />
                          <FaHeart className="text-red" />
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
    </div>
  );
};

export default ProductList;
