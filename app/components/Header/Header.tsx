import Link from "next/link";
import Image from "next/image";
import logoPng from "/public/logo.png";

export default function Header(p: {}) {
  return (
    <header className="bg-main-700 p-8 flex justify-between items-center">
      <Link href="/">
        <Image src={logoPng} alt="Logo" className="w-48" />
      </Link>
      <div>todo</div>
    </header>
  );
}
