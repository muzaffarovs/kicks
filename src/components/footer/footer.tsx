import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="mx-4 my-8 md:mx-[60px] bg-[#4a69e2] rounded-3xl md:rounded-[50px] h-full relative overflow-hidden ">
        <div className="p-4 md:px-[72px] md:py-[64px] grid grid-cols-1 md:grid-cols-2 gap-[200px] h-[350px] mb-10">
          <div className="">
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="mt-5 mb-8 text-[16px] md:text-lg text-white font-semibold">
              Sign up for free! Join the community.
            </p>

            <div className="w-full flex gap-[2px] md:gap-2">
              <input
                type="email"
                className="bg-transparent border outline-none px-4 py-[10px] h-10 md:h-12 text-white rounded-md w-[236px] md:w-[342px]"
                placeholder="enter your email"
              />
              <Button className="px-6 py-[10px] h-10 md:h-12">submit</Button>
            </div>

            <Image
              className="w-[200px] h-[61.4px] mt-8 flex md:hidden"
              src="/footer-logo-base.png"
              width={500}
              height={500}
              alt="logo"
            />
          </div>

          <div className="h-full items-center hidden md:flex">
            <Image
              className="w-[370px] h-[112px]"
              src="/footer-logo-base.png"
              width={500}
              height={500}
              alt="logo"
            />
          </div>
        </div>

        <div className="bg-[#232321] h-full md:h-[591px] rounded-3xl md:rounded-[50px] md:flex justify-between p-4 lg:p-10 gap-[128px]">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <Link
              href="/"
              className="text-2xl md:text-4xl font-semibold text-[#ffa52f]"
            >
              About us
            </Link>
            <p className="text-gray-100 text-[16px] md:text-lg mt-1 font-semibold">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>

          <div className="w-full md:flex justify-between mb-[114px] md:mb-0">
            <ul className="grid gap-2 h-fit mb-6">
              <li>
                <Link
                  href="/"
                  className="text-[20px] md:text-2xl font-semibold text-[#ffa52f]"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-100 text-[16px] md:text-[18px] mt-1 font-semibold"
                >
                  Runners
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-100 text-[16px] md:text-[18px] mt-1 font-semibold"
                >
                  Sneakers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-100 text-[16px] md:text-[18px] mt-1 font-semibold"
                >
                  Basketball
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-100 text-[16px] md:text-[18px] mt-1 font-semibold"
                >
                  Outdoor
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-100 text-[16px] md:text-[18px] mt-1 font-semibold"
                >
                  Golf
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-100 text-[16px] md:text-[18px] mt-1 font-semibold"
                >
                  Hiking
                </Link>
              </li>
            </ul>

            <ul className="grid gap-2 h-fit mb-6 md:mb-0">
              <li>
                <Link
                  href="/"
                  className="text-[20px] md:text-2xl font-semibold text-[#ffa52f]"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-100 text-[16px] md:text-[18px] mt-1 font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-100 text-[16px] md:text-[18px] mt-1 font-semibold"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-100 text-[16px] md:text-[18px] mt-1 font-semibold"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <ul className="grid gap-2 h-fit">
              <Link
                href="/"
                className="text-[20px] md:text-2xl font-semibold text-[#ffa52f]"
              >
                Follow us
              </Link>
              <div className="flex gap-4 text-white">
                <Facebook />
                <Instagram />
                <Twitter />
                <Youtube />
              </div>
            </ul>
          </div>
        </div>

        <Image
          className="w-full max-w-[1308px] absolute -bottom-5 md:-bottom-28 left-0 lg:left-10 lg:right-10"
          loading="lazy"
          src="/footer-logo-xl.png"
          width={1000}
          height={700}
          alt="logo extra large"
        />
      </footer>

      <div className="text-sm text-center my-6 text-black z-50">
        © 2024 Kicks. All rights reserved. | Made with ❤️ by{" "}
        <Link className="hover:underline" href="/">
          Endless Loop
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Footer;
