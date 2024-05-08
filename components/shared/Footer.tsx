import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo_dark.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>Copyright &copy; 2024 | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
