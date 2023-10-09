/** @format */
import fourDots from "../../public/assets/fourDots.svg";
import Image from "next/image";

const TopNav = () => {
  return (
    <section className=" border-b border-colorNormal">
      <div className="flex justify-between items-center">
        <div className="text-bold text-xl flex flex-wrap gap-5">
              <div className="./">
                <h3 className="/">All Category</h3>
              </div>
          <h3 className="/">Hot Offers</h3>
          <h3 className="/">Gift Boxes</h3>
          <h3 className="/">Projects</h3>
          <h3 className="/">Menu Items</h3>
          <h3 className="/">Help </h3>
      </div>
      <div className="gap-5 text-xl flex flex-wrap ">
        <h3 className="/">English USD</h3>
        <h3 className="flex ">
          <div className="./">Ship To</div>
        <span className="./">
        <Image src={fourDots} alt="logo" height={40} width={30}/>
        </span>
        </h3>
      </div>
      </div>
      <br/>
    </section>
    
  );
};

export default TopNav;
