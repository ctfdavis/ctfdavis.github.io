import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4">
      <Link href="/" className="mx-auto block w-fit">
        <Image
          src="/lambda-dragon-logo.svg"
          width={65}
          height={65}
          alt="λ/dragon"
        />
      </Link>
    </header>
  );
}
