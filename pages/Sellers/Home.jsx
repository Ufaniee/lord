/** @format */

import Layout from "../../components/global/Layout";
import React, { useState } from "react";
import VendorIntroSlider from "@/components/sliders/VendorIntroSlider";
import expand from "../../public/assets/expand.png";
import Image from "next/image";
import fastPay from "../../public/assets/fastPay.png";
import ordersbox from "../../public/assets/ordersbox.png";
import marketing from "../../public/assets/marketing.png";
import custombox from "../../public/assets/custombox.png";
import Link from "next/link";

const Home = () => {
  const buttonStyle =
    "bg-primary text-white px-4 py-2 rounded-md font-bold mt-8 cursor-pointer mb-8";

  const stepStyle = "shadow-md rounded-md mb-4";

  const benefitCardStyle = "shadow-md rounded-md p-4 mb-4";

  return (
    <Layout>
      {/* VendorIntro page */}
      <div>
        <section>
          <VendorIntroSlider />
          <h1 style={{ paddingTop: "40px", fontSize: "50px" }}>
            Welcome to BeelyDrop
          </h1>
          <p>
            the ultimate platform for vendors to expand their businesses and
            reach a wider audience. We are thrilled to have you join our
            community of talented sellers and take advantage of the exciting
            opportunities that await you.
          </p>
          <center>
            <h1 className="font-bold pt-8 pb-8" style={{ fontSize: "30px" }}>
              Benefits of Joining BeelyDrop
            </h1>
          </center>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className={benefitCardStyle}>
              <center>
                <p>
                  <span className="font-bold">Expand Your Reach:</span>
                  </p>
                  <br />
                  <div>
                    <Image src={expand} alt="My Image" width={150} />
                  </div>
                  <p>
                  Tap into a vast customer base and extend your business beyond
                  geographical boundaries.
                </p>
              </center>
            </div>
            <div className={benefitCardStyle}>
              <center>
                <p>
                  <span className="font-bold">
                    Personalization Opportunities:
                  </span>
                  </p>
                  <br />
                  <div>
                    <Image src={custombox} alt="My Image" width={150} />
                  </div>
                  <br />
                  <p>
                  Offer customizable products to cater to individual preferences
                  and stand out in the market.
                </p>
              </center>
            </div>
            <div className={benefitCardStyle}>
              <center>
                <p>
                  <span className="font-bold">Marketing and Promotion:</span></p>
                  <br />
                  <div>
                    <Image src={marketing} alt="My Image" width={150} />
                  </div>
                  <br />
                  <p>
                  Leverage our targeted marketing strategies and promotional
                  campaigns to boost your sales.
                </p>
              </center>
            </div>
            <div className={benefitCardStyle}>
              <center>
                <p>
                  <span className="font-bold">Seamless Order Management:</span></p>
                  <br />
                  <div>
                    <Image src={ordersbox} alt="My Image" width={150} />
                  </div>
                  <br />
                  <p>
                  Easily manage your orders, track inventory, and streamline
                  fulfillment processes.
                </p>
              </center>
            </div>
            <div className={benefitCardStyle}>
              <center>
                <p>
                  <span className="font-bold">Secure and Timely Payments:</span>
                </p>
                <br />
                <div>
                  <Image src={fastPay} alt="My Image" width={150} />
                </div>
                <br />
                <p>
                  Enjoy secure transactions and receive timely payouts for your
                  sales.
                </p>
              </center>
            </div>
          </div>
          <br />
        </section>

        <section>
          <div className="text-center">
            <p>
              Join BeelyDrop today and unlock the potential to grow your
              business, reach new customers, and elevate your brand to new
              heights. Together, let us create a thriving online marketplace
              that celebrates creativity, quality, and personalized shopping
              experiences.
            </p>
            <br />
            <br />

            <Link
              href="Sellers/Authentication/vendorlogin"
              className={buttonStyle}
            >
              Start Selling Today
            </Link>
          </div>
          <h1 className="font-bold pt-8 pb-4" style={{ fontSize: "30px" }}>
            Here is how it works:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className={stepStyle}>
              <div className="bg-primary pt-5 pb-5 rounded">
                <h1 className="p-4 font-bold">
                  Step 1: Sign Up and Create Your Vendor Profile
                </h1>
              </div>
              <p className="p-4">
                Joining BeelyDrop is quick and easy. Simply sign up as a vendor,
                provide essential details about your business, and create an
                enticing vendor profile. Showcase your unique offerings,
                highlight your brand story, and let customers get to know you.
              </p>
            </div>
            <div className={stepStyle}>
              <div className="bg-primary pt-5 pb-5 rounded">
                <h1 className="p-4 font-bold">
                  Step 2: List and Customize Your Products
                </h1>
              </div>
              <p className="p-4">
                Once your profile is set up, it is time to add your products to
                our extensive catalog. Upload captivating images, write
                compelling descriptions, and set competitive prices. With our
                user-friendly interface, you can easily customize your products
                and provide options for personalization, giving your customers a
                truly unique shopping experience.
              </p>
            </div>
            <div className={stepStyle}>
              <div className="bg-primary pt-5 pb-5 rounded">
                <h1 className="p-4 font-bold">
                  Step 3: Reach a Wider Audience
                </h1>
              </div>
              <p className="p-4">
                With BeelyDrop, you gain access to a growing customer base eager
                to discover new and exciting products. Our platform employs
                targeted marketing strategies and advanced algorithms to promote
                your offerings to the right audience. Maximize your visibility
                and increase sales with our powerful marketing tools and
                dedicated support.
              </p>
            </div>
            <div className={stepStyle}>
              <div className="bg-primary pt-5 pb-5 rounded">
                <h1 className="p-4 font-bold">
                  Step 4: Seamlessly Manage Orders and Inventory
                </h1>
              </div>
              <p className="p-4">
                We understand the importance of efficient order management.
                BeelyDrop provides you with intuitive tools to track orders,
                manage inventory, and streamline your fulfillment process. Our
                robust backend system ensures a smooth experience, allowing you
                to focus on what you do best, creating exceptional products.
              </p>
            </div>
            <div className={stepStyle}>
              <div className="bg-primary pt-5 pb-5 rounded">
                <h1 className="p-4 font-bold">
                  Step 5: Benefit from Secure Transactions and Timely Payments
                </h1>
              </div>
              <p className="p-4">
                At BeelyDrop, we prioritize your financial security. Our
                platform offers secure transactions, protecting you and your
                customers sensitive information. We also provide timely payouts,
                ensuring you receive your earnings promptly and hassle-free.
              </p>
            </div>
            <div className={stepStyle}>
              <div className="bg-primary pt-5 pb-5 rounded">
                <h1 className="p-4 font-bold">
                  Step 6: Join a Supportive Vendor Community
                </h1>
              </div>
              <p className="p-4">
                Being part of BeelyDrop means joining a vibrant and supportive
                community of like-minded vendors. Connect with fellow sellers,
                share insights, and exchange valuable tips. Our interactive
                forums and dedicated support team are here to assist you every
                step of the way.
              </p>
            </div>
          </div>
          <br />

          <div className="text-center">
            <Link href="/vendorlogin" className={buttonStyle}>
              Start Selling Today
            </Link>
          </div>
          <br />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
