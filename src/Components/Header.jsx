import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth < 600);
  return (
    <div className={`text-2xl uppercase text-[#FF0080] font-semibold  px-5 py-6 sm:max-lg:pl-10 sm:max-lg:py-4 ${mobileView && "flex justify-between items-center"}`}>
      <h1>y2z travel</h1>
      {mobileView && (
        <div>
          <RxHamburgerMenu size={28} color="black"/>
        </div>
      )}
    </div>
  );
};

export default Header;
