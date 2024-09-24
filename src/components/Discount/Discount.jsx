import React from "react";
import { Link } from "react-router-dom";
import PHOTOS from "../../assets/images";

function Discount() {
  return (
    <div className="flex flex-col items-center h-auto gap-3 mt-2 w-60vw small:w-90vw">
      <img src={PHOTOS.discount_avatar} alt="" className="w-350px h-300px" />
      <h4 className="font-bold">Preferred Learning Mode</h4>

      <div className="flex items-center justify-center h-auto gap-3 w-100">
        <Link to='/choice' className="flex items-center justify-center bg-discountBlue h-40px w-200px text-vogueWhite rounded-5 hover:bg-transparent hover:border hover:text-discountBlue hover:border-discountBlue text-15px">
          ONSITE
        </Link>
        <Link to='/choice'
            className="flex items-center justify-center bg-vogueBlack h-40px w-200px text-vogueWhite rounded-5 hover:bg-transparent hover:border hover:text-vogueBlack hover:border-vogueBlack text-15px"
        >VIRTUAL</Link>
      </div>
    </div>
  );
}

export default Discount;
