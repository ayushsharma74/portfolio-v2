"use client";
import Link from "next/link";
import GifIcon from "../../public/icon.gif";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center py-2">
      <div className="flex gap-3">
        <Link
          href={"/"}
          className={pathname === "/" ? "font-bold underline" : ""}
        >
          Home
        </Link>
        <Link
          href={"/projects"}
          className={pathname === "/projects" ? "font-bold underline" : ""}
        >
          Projects
        </Link>
        <Link
          href={"/blogs"}
          className={pathname === "/blogs" ? "font-bold underline" : ""}
        >
          Blogs
        </Link>
        <Link
          href={"/contact"}
          className={pathname === "/contact" ? "font-bold underline" : ""}
        >
          Contact
        </Link>
      </div>
      <div>
        <Link href={"/"}>
          <Image src={GifIcon} width={60} height={60} alt="icon" />
        </Link>
      </div>
    </nav>
  );
}
