/** @format */

import products from "../../data/products.json";
import { MdStarRate } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import fastDelivery from "../../public/assets/icons/fast-delivery.svg";
import voucher from "../../public/assets/icons/voucher.svg";
import mypackage from "../../public/assets/icons/package.svg";
import Button from "../global/Button";
import Image from "next/image";

const ProductInfo = ({ id }) => {
  //  Find the product by id
  const data = products.find((product) => product.id === id);
  console.log(data);

  return (
    <section className="flex flex-col lg:items-center lg:flex-row gap-20 mt-16 mb-5 font-[Poppins]">
      <span className="block lg:hidden">
        Product &nbsp; &gt; &nbsp;{" "}
        <span className="text-primary"> {data?.name}</span>
      </span>

      {/* Product Pictures */}
      <div className="flex flex-col w-full mx-auto lg:w-1/2 gap-4">
        <div className="w-full h-[350px] bg-gray"></div>
        <div className="flex justify-center gap-2">
          <div className="w-[100px] h-[100px] bg-gray"></div>
          <div className="w-[100px] h-[100px] bg-gray"></div>
          <div className="w-[100px] h-[100px] bg-gray"></div>
        </div>
      </div>

      {/* Product Detail information */}
      <div className="w-full lg:w-1/2 text-colorBold text-center lg:text-left">
        <span className="hidden lg:block">
          Product &nbsp; &gt; &nbsp;{" "}
          <span className="text-primary"> {data?.name}</span>
        </span>
        <div className="mt-3 flex flex-col lg:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold">{data?.star}.0</span>
            <span className="flex gap-1">
              {Array.from({ length: data?.star }).map((star, index) => (
                <MdStarRate key={index} className="text-primary" />
              ))}
            </span>
            <span>Review (12) &nbsp; | &nbsp; Sold {data?.sold}</span>
          </div>
          <div>
            <Button className="flex items-center gap-2 font-semibold">
              <FaHeart className="text-primary" />
              Add to Wishlist
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-5 border-b border-colorNormal pb-6">
          <h1 className="text-3xl">{data?.name}</h1>
          <div className="flex justify-center lg:justify-start items-center gap-2">
            <span className="text-4xl font-bold">${data?.price}.00</span>
            <span className="line-through text-colorNormal">$99.00</span>
            <Button
              buttonText="Save 50%"
              className="px-1 py-[4px] border border-primary text-sm font-semibold"
            />
          </div>
          <div className="flex gap-4">
            <span className="flex items-center text-sm gap-3">
              <Image
                src={fastDelivery}
                alt="fast Delivery icon"
                width={30}
                height={30}
              />
              Free Delivery
            </span>
            <span className="flex items-center text-sm gap-3">
              <Image src={voucher} alt="Voucher icon" /> Available Voucher{" "}
            </span>
            <span className="flex items-center text-sm gap-3">
              <Image src={mypackage} alt="package icon" /> In Stock{" "}
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <h3 className="font-semibold">Description</h3>
          <p className="text-colorNormal text-sm">
            Wireless Microphone with the new style, shockproof, clear voice
            reception that suitable for recording, online meeting, vlogging, and
            calling. Free casing with high-quality zipper.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between mt-20 mb-10 items-center">
          <div className="flex items-center gap-4">
            <span>Quantity</span>
            <Button
              type="button"
              buttonText="-"
              className="bg-gray font-bold"
            />
            <span className="text-primary">1</span>
            <Button
              type="button"
              buttonText="+"
              className="bg-primary font-bold"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="button"
              buttonText="Chat"
              className="border border-primary text-sm font-semibold"
            />
            <Button
              type="button"
              buttonText="Add to Cart"
              className="bg-primary text-sm font-semibold"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
