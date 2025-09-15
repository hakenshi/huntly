import Image from "next/image";
import Link from "next/link";

export default function HuntlyLogo({href}:{href: string}) {
  return (
    <Link href={href} className="text-2xl font-bold text-white hover:scale-105 transition-transform inline-flex items-center gap-2">
      <Image width={1000} height={1000} src={"/huntly-2.png"} alt="huntly logo" className="size-10" />
      <p>Huntly</p>
    </Link>
  )
}