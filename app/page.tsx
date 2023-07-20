import Image from "next/image";
import bg from "../public/images/feb-22-concert-4-website.jpg";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/feb-22-concert-4-website.jpg"
        alt="EGO"
        fill
        style={{
          zIndex: -1,
          objectFit: "cover",
          filter: "brightness(0.5)",
        }}
      />

      <div className=" text-neutral-300">
        <h1 className="text-3xl font-bold ">Welcome</h1>
        EVERYTHING EGO
      </div>
    </div>
  );
}
