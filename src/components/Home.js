import React, { useState } from "react";
import Logo from "../images/Logo.png";
import Icon from "../images/Icon.png";
import Asa from "../images/Asa.png";
import Asa2 from "../images/Asa2.png";
import Bandana from "../images/Bandana.png";
import Ayra from "../images/Ayra.png";
import Fave from "../images/Fave.png";
import Wizkid from "../images/Wizkid.png";
import Overload from "../images/Overload.png";
import Pheelz from "../images/Pheelz.png";
import Show from "../images/Show.png";
import Sugarcane from "../images/Sugarcane.png";
import Asake from "../images/Asake.png";
import Justin from "../images/Justin.png";
import Tattoo from "../images/Tattoo.png";
import Zino from "../images/Zino.png";
import Rush from "../images/Rush.png";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeSvg, BlufSvg, PodcastSvg } from "./svgs";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container grid grid-cols-none md:grid-cols-12 lg:grid-cols-12 justify-center md:gap-5 h-full ">
      {/* Column one */}
      <div className=" text-lg md:bg-black text-grey-300 pt-8 col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-2">
        <div className="flex justify-center">
          <img className="hidden md:block fixed " src={Logo} alt="Logo" />
        </div>

        <div className="hidden md:block fixed lg:ml-12 lg:mt-14  ">
          <SideBar />
        </div>
      </div>

      {/* Column Two  */}
      <div className="col-span-3 md:col-span-9 lg:col-span-9 lg:pr-6 xl:col-span-7 text-[#F3E7E7] md:pt-8 px-3 md:px-2 lg:px-0">
        <div className="flex flex-row justify-between ">
          <div className="md:hidden">
            <div
              className="cursor-pointer w-12 md:hidden  "
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <div className="bg-[#1E1E1E] left-0  w-7/12">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div className="bg-[#17161A]  w-7/12">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                  </svg>
                </div>
              )}
            </div>

            {open ? (
              <div
                className={
                  " bg-[#1E1E1E] left-0 w-7/12 h-full  absolute md:hidden "
                }
              >
                <SideBar />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="">
            <div className="absolute mt-4 ml-4 ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 14L11.0093 11.004M12.6666 7.00001C12.6666 8.5029 12.0696 9.94424 11.0069 11.0069C9.94421 12.0697 8.50287 12.6667 6.99998 12.6667C5.49709 12.6667 4.05575 12.0697 2.99304 11.0069C1.93034 9.94424 1.33331 8.5029 1.33331 7.00001C1.33331 5.49712 1.93034 4.05578 2.99304 2.99307C4.05575 1.93037 5.49709 1.33334 6.99998 1.33334C8.50287 1.33334 9.94421 1.93037 11.0069 2.99307C12.0696 4.05578 12.6666 5.49712 12.6666 7.00001V7.00001Z"
                  stroke="#CCCCCC"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div>
              <input
                className="text-[#F3E7E7] bg-[#5B5858] w-32 md:w-64 lg:w-96 px-10 py-3 rounded-lg "
                type=""
                placeholder="Search artists, songs, podcasts..."
              />
            </div>
          </div>

          <div className="flex flex-row gap-3 ">
            <div className="w-4 md:w-8 cursor-pointer">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5_466)">
                  <path
                    d="M17.9999 34.28C18.6299 34.2655 19.2344 34.0287 19.7065 33.6114C20.1787 33.1942 20.4881 32.6234 20.5799 32H15.3199C15.4144 32.6403 15.7383 33.2245 16.2312 33.6439C16.7242 34.0633 17.3528 34.2894 17.9999 34.28Z"
                    fill="#F3E7E7"
                  />
                  <path
                    d="M32.85 28.13L32.51 27.83C31.5455 26.9706 30.7012 25.985 30 24.9C29.2343 23.4025 28.7753 21.7672 28.65 20.09V15.15C28.646 14.5499 28.5925 13.9513 28.49 13.36C26.7962 13.0118 25.2746 12.089 24.1831 10.7478C23.0915 9.40654 22.4969 7.72929 22.5 5.99999V5.36999C21.456 4.85618 20.3342 4.5183 19.18 4.36999V3.10999C19.18 2.75593 19.0394 2.41637 18.789 2.16601C18.5387 1.91565 18.1991 1.77499 17.845 1.77499C17.491 1.77499 17.1514 1.91565 16.9011 2.16601C16.6507 2.41637 16.51 2.75593 16.51 3.10999V4.41999C13.9258 4.78455 11.5606 6.07174 9.85127 8.04393C8.14192 10.0161 7.20378 12.5401 7.21005 15.15V20.09C7.0848 21.7672 6.62583 23.4025 5.86005 24.9C5.17093 25.9823 4.34024 26.9677 3.39005 27.83L3.05005 28.13V30.95H32.85V28.13Z"
                    fill="#F3E7E7"
                  />
                  <path
                    d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"
                    fill="#A22E20"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_466">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="hidden md:flex pt-1">WakaWaka Boy</div>
            <div>
              <img className="pl-3 md:pl:0" src={Icon} alt="Profile Picture" />
            </div>
            <div className="mt-3 cursor-pointer">
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 0L8 7.5L15.5 0H0.5Z" fill="#F3E7E7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 mb-36 ">
          <div className="mt-8 md:relative">
            <img
              className=" md:absolute mix-blend-normal md:mix-blend-plus-lighter"
              src={Ayra}
              alt="Ayra Starr"
            />
            <div className=" -mt-24 md:-mt-0 p-2 md:p-2 lg:-mt-0 lg:p-5  ">
              <div className="text-sm font-light mb-1 md:mb-4 lg:mb-7 -mt-3 md:-mt-0 tracking-wide">
                TOP ARTISTES
              </div>
              <div className="flex flex-row gap-2 md:gap-2 lg:gap-5 md:mb-1 lg:mb-3 ">
                <div className="text-lg md:text-3xl font-bold tracking-wider">
                  AYRA STARR
                </div>
                <div className="mt-1 md:mt-2 ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12H0ZM11.3152 17.136L18.224 8.4992L16.976 7.5008L11.0848 14.8624L6.912 11.3856L5.888 12.6144L11.3152 17.1376V17.136Z"
                      fill="#F3E7E7"
                    />
                  </svg>
                </div>
              </div>
              <div className="hidden md:flex flex-row gap-2">
                <div className="">
                  <svg
                    width="21 sm"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17V4.716C6.99994 4.23821 7.17094 3.77619 7.48203 3.41355C7.79312 3.05091 8.22376 2.81163 8.696 2.739L17.696 1.354C17.981 1.31017 18.2721 1.32849 18.5494 1.40771C18.8267 1.48693 19.0836 1.62517 19.3024 1.81295C19.5212 2.00073 19.6969 2.23362 19.8173 2.49565C19.9377 2.75767 20 3.04264 20 3.331V15"
                      stroke="#F3E7E7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path d="M7 8L20 6" stroke="#F3E7E7" stroke-width="2" />
                    <path
                      d="M7 17C7 17.7956 6.68393 18.5587 6.12132 19.1213C5.55871 19.6839 4.79565 20 4 20C3.20435 20 2.44129 19.6839 1.87868 19.1213C1.31607 18.5587 1 17.7956 1 17C1 15.343 2.343 15 4 15C5.657 15 7 15.343 7 17ZM20 15C20 15.7956 19.6839 16.5587 19.1213 17.1213C18.5587 17.6839 17.7956 18 17 18C16.2044 18 15.4413 17.6839 14.8787 17.1213C14.3161 16.5587 14 15.7956 14 15C14 13.343 15.343 13 17 13C18.657 13 20 13.343 20 15Z"
                      stroke="#F3E7E7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-sm  font-light tracking-wider">
                  1.5million monthly listeners
                </div>
              </div>
              <div className="flex flex-row gap-2 bg-[#F3E7E7] w-32 md:w-36 p-2 mt-1 md:mt-3 lg:mt-10 rounded-lg">
                <div className="mt-1">
                  <svg
                    width="25"
                    height="18"
                    viewBox="0 0 25 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.685 4.6395C10.5729 4.55966 10.4409 4.51222 10.3036 4.50238C10.1663 4.49255 10.0289 4.5207 9.90651 4.58374C9.78413 4.64679 9.68147 4.74231 9.60976 4.85983C9.53806 4.97735 9.50008 5.11234 9.5 5.25V12.75C9.50008 12.8877 9.53806 13.0227 9.60976 13.1402C9.68147 13.2577 9.78413 13.3532 9.90651 13.4163C10.0289 13.4793 10.1663 13.5075 10.3036 13.4976C10.4409 13.4878 10.5729 13.4403 10.685 13.3605L15.935 9.6105C16.0322 9.54112 16.1115 9.44953 16.1661 9.34334C16.2208 9.23715 16.2494 9.11944 16.2494 9C16.2494 8.88056 16.2208 8.76285 16.1661 8.65666C16.1115 8.55048 16.0322 8.45888 15.935 8.3895L10.685 4.6395V4.6395Z"
                      fill="#1E1E1E"
                    />
                    <path
                      d="M0.5 3C0.5 2.20435 0.816071 1.44129 1.37868 0.87868C1.94129 0.31607 2.70435 0 3.5 0H21.5C22.2956 0 23.0587 0.31607 23.6213 0.87868C24.1839 1.44129 24.5 2.20435 24.5 3V15C24.5 15.7956 24.1839 16.5587 23.6213 17.1213C23.0587 17.6839 22.2956 18 21.5 18H3.5C2.70435 18 1.94129 17.6839 1.37868 17.1213C0.816071 16.5587 0.5 15.7956 0.5 15V3ZM23 3C23 2.60218 22.842 2.22064 22.5607 1.93934C22.2794 1.65804 21.8978 1.5 21.5 1.5H3.5C3.10218 1.5 2.72064 1.65804 2.43934 1.93934C2.15804 2.22064 2 2.60218 2 3V15C2 15.3978 2.15804 15.7794 2.43934 16.0607C2.72064 16.342 3.10218 16.5 3.5 16.5H21.5C21.8978 16.5 22.2794 16.342 22.5607 16.0607C22.842 15.7794 23 15.3978 23 15V3Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                </div>
                <div className=" text-black text-sm md:text-md font-medium">
                  Listen Now
                </div>
              </div>
            </div>
          </div>

          {/* Recently Played */}

          <div className="container mx-auto -mt-5 lg:mt-5">
            <div className="flex justify-between px-2 md:px-0 mt-5">
              <div className="text-xl font-bold mb-3 ">Recently Played</div>
              <div className=" cursor-pointer hover:underline">Show all</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 md:gap-3">
              {/* <Swiper
                spaceBetween={5}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              > */}
              {/* <SwiperSlide> */}
              <div className=" bg-[#5b585815] rounded-md hover:bg-[#5B585833] hover:shadow-lg hover:rounded-md p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300 ">
                <img
                  src={Asa}
                  alt="Mayana"
                  className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300"
                />
                <div className="py-3">
                  <div className="text-lg font-semibold ">Mayana</div>
                  <div>Asa</div>
                </div>
              </div>
              {/* </SwiperSlide> */}

              {/* <SwiperSlide> */}
              <div className="bg-[#5b585815] rounded-md hover:bg-[#5B585833] hover:shadow-lg hover:rounded-md p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300">
                <img src={Rush} alt="Rush" className="w-full" />
                <div className="py-3">
                  <div className="text-lg font-semibold">Rush</div>
                  <div>Ayra Star</div>
                </div>
              </div>
              {/* </SwiperSlide> */}

              {/* <SwiperSlide> */}
              <div className="bg-[#5b585815] rounded-md hover:bg-[#5B585833] hover:shadow-lg hover:rounded-md p-2  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300">
                <img src={Justin} alt="Justin" className="w-full" />
                <div className="py-3">
                  <div className="text-lg font-semibold">Ghost</div>
                  <div>Justin Bieber</div>
                </div>
              </div>
              {/* </SwiperSlide> */}

              {/* <SwiperSlide> */}
              <div className="bg-[#5b585815] rounded-md hover:bg-[#5B585833] hover:shadow-lg hover:rounded-md p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300">
                <img src={Bandana} alt="Fireboy" className="w-full" />
                <div className="py-3">
                  <div className="text-lg font-semibold">Bandana ft Asake</div>
                  <div>Fireboy DML </div>
                </div>
              </div>
              {/* </SwiperSlide> */}
              {/* </Swiper> */}
            </div>
          </div>

          {/* Mixed for you */}
          <div>
            <div className="flex justify-between px-2 md:px-0">
              <div className="text-xl font-bold mb-3">Mixed for You</div>
              <div className="cursor-pointer hover:underline">Show all</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              <div className="bg-[#5b585815] rounded-md hover:bg-[#5B585833] hover:shadow-lg hover:rounded-md p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300 ">
                <img src={Tattoo} alt="Nasty" className="w-full " />
                <div className="py-3">
                  <div className="text-lg font-semibold">Somebody</div>
                  <div>Nasty C</div>
                </div>
              </div>

              <div className="bg-[#5b585815] rounded-md hover:bg-[#5B585833] hover:shadow-lg hover:rounded-md p-2 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300">
                <img src={Asake} alt="Asake" className="w-full " />
                <div className="py-3">
                  <div className="text-lg font-semibold">Terminator</div>
                  <div>Asake</div>
                </div>
              </div>

              <div className="bg-[#5b585815] rounded-md hover:bg-[#5B585833] hover:shadow-lg hover:rounded-md p-2  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300">
                <img src={Zino} alt="Zino" className="w-full " />
                <div className="py-3">
                  <div className="text-lg font-semibold">Call on Duty</div>
                  <div>Zinolesky</div>
                </div>
              </div>

              <div className="bg-[#5b585815] rounded-md hover:bg-[#5B585833] hover:shadow-lg hover:rounded-md p-2  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300">
                <img src={Asa2} alt="Bimpe" className="w-full " />
                <div className="py-3">
                  <div className="text-lg font-semibold">Bimpe</div>
                  <div>Asa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer  */}
        <div className="hidden md:block lg:block ">
          <Footer />
        </div>
      </div>

      {/* Column Three */}
      <div className="col-span-4 -mt-32  lg:-mt-0  md:col-span-12 md:ml-48  xl:ml-0 lg:col-span-12  xl:col-span-3 text-[#F3E7E7] flex flex-col bg-[#17161A] px-5 h-full ">
        <div className="pt-8">
          <div className="text-2xl font-bold">Hotlist</div>
          {/* Trending Songs */}
          <div>
            <div className="mt-5 text-xl mb-5 font-medium">Trending Songs</div>
            <div>
              <ul>
                <li className="flex flex-col">
                  <div className="flex flex-row justify-between  hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img className=" w-14 rounded-md" src={Rush} alt="Rush" />
                      <div>
                        <div className=" text-lg">Rush</div>
                        <div className="text-sm">Ayra Star</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.8333 11.8333H0.166626V10.1667H11.8333V11.8333ZM4.33329 8.01666L0.999959 4.68332L2.17496 3.50832L4.33329 5.65832L9.82496 0.166656L11 1.34999L4.33329 8.01666Z"
                            fill="#F3E7E7"
                          />
                        </svg>
                      </div>

                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col mt-5">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img
                        className=" w-14 rounded-md"
                        src={Bandana}
                        alt="Rush"
                      />
                      <div>
                        <div className="text-lg">Bandana ft Asake</div>
                        <div className="text-sm">Fireboy DML</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="14"
                          height="17"
                          viewBox="0 0 14 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.0625 15.5625H12.3125M1.6875 7.4375L6.6875 11.8125L11.6875 7.4375M6.6875 1.1875V11.8125"
                            stroke="#F3E7E7"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col mt-5">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img
                        className=" w-14 rounded-md"
                        src={Asake}
                        alt="Rush"
                      />
                      <div>
                        <div className="text-lg">Joha</div>
                        <div className="text-sm">Asake</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="14"
                          height="17"
                          viewBox="0 0 14 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.0625 15.5625H12.3125M1.6875 7.4375L6.6875 11.8125L11.6875 7.4375M6.6875 1.1875V11.8125"
                            stroke="#F3E7E7"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col mt-5">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img
                        className=" w-14 rounded-md"
                        src={Pheelz}
                        alt="Rush"
                      />
                      <div>
                        <div className="text-lg">Electricity ft Davido</div>
                        <div className="text-sm">Pheelz</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="14"
                          height="17"
                          viewBox="0 0 14 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.0625 15.5625H12.3125M1.6875 7.4375L6.6875 11.8125L11.6875 7.4375M6.6875 1.1875V11.8125"
                            stroke="#F3E7E7"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col mt-5 ">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img
                        className=" w-14 rounded-md"
                        src={Asake}
                        alt="Rush"
                      />
                      <div>
                        <div>Organize</div>
                        <div>Asake</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className="">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.8333 11.8333H0.166626V10.1667H11.8333V11.8333ZM4.33329 8.01666L0.999959 4.68332L2.17496 3.50832L4.33329 5.65832L9.82496 0.166656L11 1.34999L4.33329 8.01666Z"
                            fill="#F3E7E7"
                          />
                        </svg>
                      </div>

                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className=" text-end cursor-pointer mb-4 hover:underline">
              See all
            </div>

            <hr />
            {/* Soft Gbedu */}
            <div>
              <div className="mt-5 text-xl mb-5 font-medium">Soft Gbedu</div>
              <ul>
                <li className="flex flex-col mt-5">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img className=" w-14 rounded-md" src={Asa} alt="Rush" />
                      <div>
                        <div className=" text-lg">Mayana</div>
                        <div className="text-sm">Asa</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.375 17.5C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V3.125C3.75002 3.01639 3.77834 2.90967 3.83217 2.81534C3.886 2.72101 3.96348 2.64234 4.05697 2.58707C4.15047 2.53181 4.25675 2.50186 4.36534 2.50018C4.47394 2.4985 4.58109 2.52515 4.67625 2.5775L17.1763 9.4525C17.2742 9.50645 17.356 9.58572 17.4129 9.68202C17.4698 9.77832 17.4998 9.88814 17.4998 10C17.4998 10.1119 17.4698 10.2217 17.4129 10.318C17.356 10.4143 17.2742 10.4935 17.1763 10.5475L4.67625 17.4225C4.58397 17.4733 4.48034 17.5 4.375 17.5Z"
                            fill="#F3E7E7"
                          />
                        </svg>
                      </div>
                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col mt-5">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img
                        className=" w-14 rounded-md"
                        src={Wizkid}
                        alt="Rush"
                      />
                      <div>
                        <div className=" text-lg">Bad To Me</div>
                        <div className="text-sm">Wizkid</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.8333 11.8333H0.166626V10.1667H11.8333V11.8333ZM4.33329 8.01666L0.999959 4.68332L2.17496 3.50832L4.33329 5.65832L9.82496 0.166656L11 1.34999L4.33329 8.01666Z"
                            fill="#F3E7E7"
                          />
                        </svg>
                      </div>

                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col mt-5">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img
                        className=" w-14 rounded-md"
                        src={Overload}
                        alt="Rush"
                      />
                      <div>
                        <div className=" text-lg">Overloading(OVt...</div>
                        <div className="text-sm">Mavins</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="14"
                          height="17"
                          viewBox="0 0 14 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.0625 15.5625H12.3125M1.6875 7.4375L6.6875 11.8125L11.6875 7.4375M6.6875 1.1875V11.8125"
                            stroke="#F3E7E7"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col mt-5">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img
                        className=" w-14 rounded-md"
                        src={Sugarcane}
                        alt="Rush"
                      />
                      <div>
                        <div className=" text-lg">Sugarcane Remix</div>
                        <div className="text-sm">Camidoh</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="14"
                          height="17"
                          viewBox="0 0 14 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.0625 15.5625H12.3125M1.6875 7.4375L6.6875 11.8125L11.6875 7.4375M6.6875 1.1875V11.8125"
                            stroke="#F3E7E7"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col mt-5">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img className=" w-14 rounded-md" src={Show} alt="Rush" />
                      <div>
                        <div className=" text-lg">Show Me Off</div>
                        <div className="text-sm">Asa</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.8333 11.8333H0.166626V10.1667H11.8333V11.8333ZM4.33329 8.01666L0.999959 4.68332L2.17496 3.50832L4.33329 5.65832L9.82496 0.166656L11 1.34999L4.33329 8.01666Z"
                            fill="#F3E7E7"
                          />
                        </svg>
                      </div>

                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col mt-5">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img className=" w-14 rounded-md" src={Fave} alt="Rush" />
                      <div>
                        <div className=" text-lg">Baby Riddim</div>
                        <div className="text-sm">Fave</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.8333 11.8333H0.166626V10.1667H11.8333V11.8333ZM4.33329 8.01666L0.999959 4.68332L2.17496 3.50832L4.33329 5.65832L9.82496 0.166656L11 1.34999L4.33329 8.01666Z"
                            fill="#F3E7E7"
                          />
                        </svg>
                      </div>

                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col mt-5">
                  <div className="flex flex-row justify-between hover:bg-[#5B585833] hover: h-14 hover: w-full">
                    <div className="flex flex-row gap-3">
                      <img
                        className=" w-14 rounded-md"
                        src={Justin}
                        alt="Rush"
                      />
                      <div>
                        <div className=" text-lg">Ye</div>
                        <div className="text-sm">Burna Boy</div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                      <div className=" ">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.375 17.5C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V3.125C3.75002 3.01639 3.77834 2.90967 3.83217 2.81534C3.886 2.72101 3.96348 2.64234 4.05697 2.58707C4.15047 2.53181 4.25675 2.50186 4.36534 2.50018C4.47394 2.4985 4.58109 2.52515 4.67625 2.5775L17.1763 9.4525C17.2742 9.50645 17.356 9.58572 17.4129 9.68202C17.4698 9.77832 17.4998 9.88814 17.4998 10C17.4998 10.1119 17.4698 10.2217 17.4129 10.318C17.356 10.4143 17.2742 10.4935 17.1763 10.5475L4.67625 17.4225C4.58397 17.4733 4.48034 17.5 4.375 17.5Z"
                            fill="#F3E7E7"
                          />
                        </svg>
                      </div>
                      <div className=" cursor-pointer">
                        <svg
                          width="8"
                          height="20"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16659 2.33333C1.16659 2.79357 1.53968 3.16667 1.99992 3.16667C2.46016 3.16667 2.83325 2.79357 2.83325 2.33333C2.83325 1.8731 2.46016 1.5 1.99992 1.5C1.53968 1.5 1.16659 1.8731 1.16659 2.33333Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 9.00001C1.16659 9.46024 1.53968 9.83334 1.99992 9.83334C2.46016 9.83334 2.83325 9.46024 2.83325 9.00001C2.83325 8.53977 2.46016 8.16667 1.99992 8.16667C1.53968 8.16667 1.16659 8.53977 1.16659 9.00001Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                          <path
                            d="M1.16659 15.6667C1.16659 16.1269 1.53968 16.5 1.99992 16.5C2.46016 16.5 2.83325 16.1269 2.83325 15.6667C2.83325 15.2064 2.46016 14.8333 1.99992 14.8333C1.53968 14.8333 1.16659 15.2064 1.16659 15.6667Z"
                            stroke="#F3E7E7"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
