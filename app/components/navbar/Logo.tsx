"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// LOGO
import GS from "../../../public/assets/cavebnb-logo.png";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      className="hidden md:block cursor-pointer"
      src={GS}
      alt="logo"
      height={100}
      width={150}
    />
  );
};

export default Logo;
