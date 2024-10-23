import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>
      {/*bigger screens*/}
      <div className="hidden md:flex items-center justify-between gap-8 h-full"></div>
      {/*LEFT*/}
      <div className="w-1/3">
      <Link href="/">
      <Image src="/logo.png" alt="" width={24} height={24}/>
           <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
      </div>
      {/*RIGTH*/}
      <div className="w-2/3"></div>
    </div>
  );
};

export default Navbar;
