import Image from "next/image";
import ContactForm from "./components/contact-form";

export default function ContactPage() {
  return (
    <div className="grid grid-cols-2">
      <Image
        src="/images/IMG_7024-1600x1067.jpg"
        alt=""
        width={750}
        height={750}
      />
      <ContactForm />
    </div>
  );
}
