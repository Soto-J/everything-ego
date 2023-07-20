import Image from "next/image";
import bg from "../public/images/feb-22-concert-4-website.jpg";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/feb-22-concert-4-website.jpg"
        alt="EGO"
        fill
        style={{ objectFit: "cover",  }}
      />

      <div className="text-neutral-300">
        <h1 className="text-3xl font-bold ">Welcome</h1>
        EVERYTHING EGO
      </div>
    </div>
  );
}
