import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <Image src="/campfire.svg" width={150} height={150} alt="" />
      <h1 className="text-3xl mt-8">Not Found</h1>
    </div>
  );
}
