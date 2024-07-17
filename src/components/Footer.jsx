import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col items-start md:items space-y-4 md:justify-between text-sm md:text-md py-8">
        <div className="flex flex-col text-white">
          <p>Featured Blog</p>
          <p>Most viewed</p>
          <p>Readers choice</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Forms</p>
          <p>Support</p>
          <p>Recent Post</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & conditions</p>
        </div>
      </div>

      <p className="py-2 pb-2 text-center text-white bg-black">
        All Right Reservered @Shailendra_Mahadule
      </p>
    </>
  );
};

export default Footer;


