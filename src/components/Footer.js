import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaRegCopyright,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-7 sm:gap-14 text-md md:gap-12 md:ml-52 lg:ml-0 mt-16 md:mt-10 mx-5 mb-10">
        <ul className="leading-8 col-span-3 sm:col-span-2 md:col-span-3">
          <li className="font-bold">Company</li>
          <li>
            <a className="hover:underline " href="">
              About
            </a>
          </li>
          {/* <li>
            <a className="hover:underline " href="">
              Jobs
            </a>
          </li> */}
          <li>
            <a className="hover:underline " href="">
              Records
            </a>
          </li>
        </ul>

        <ul className="leading-8 col-span-5 sm:col-span-3 md:col-span-3 ">
          <li className="font-bold">Useful Links</li>
          <li>
            <a className="hover:underline " href="">
              Support
            </a>
          </li>
          <li>
            <a className="hover:underline " href="">
              Jobs
            </a>
          </li>
        </ul>

        <ul className="leading-8 col-span-4 sm:col-span-3 md:col-span-3">
          <li className="font-bold">Communities</li>
          <li>
            <a className="hover:underline " href="">
              For Artists
            </a>
          </li>
          <li>
            <a className="hover:underline " href="">
              Developers
            </a>
          </li>
          <li>
            <a className="hover:underline " href="">
              Advertising
            </a>
          </li>
          <li>
            <a className="hover:underline " href="">
              Investors
            </a>
          </li>
          {/* <li>
            <a className="hover:underline " href="">
              Vendors
            </a>
          </li> */}
        </ul>

        <ul className="leading-8 col-span-5 sm:col-span-3 md:col-span-3">
          <li className="font-bold">Social Media</li>

          <li>
            <div className="flex flex-row gap-2">
              <a className="hover:bg-[grey]" href="http://www.facebook.com">
                <FaFacebookSquare size="24px" />
              </a>
              <a className="hover:bg-[grey]" href="http://www.twitter.com">
                <FaTwitterSquare size="24px" />
              </a>
              <a className="hover:bg-[grey]" href="http://www.instagram.com">
                <FaInstagramSquare size="24px" />
              </a>
            </div>
          </li>

          <li className="flex flex-row gap-3 mt-5">
            <div className="mt-2">
              <FaRegCopyright />
            </div>
            <div>2023</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
