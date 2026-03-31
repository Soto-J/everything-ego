"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ImYoutube2 } from "react-icons/im";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

import { cn } from "@/lib/utils";

import { SidebarTrigger } from "./ui/sidebar";

export default function AppHeader() {
  const pathName = usePathname();

  const route = pathName === "/" ? "home" : pathName.slice(1);

  const socialLinks = [
    {
      title: "You Tube",
      icon: ImYoutube2,
      size: 40,
      href: "https://youtube.com/@eazy360?si=1t_TmxJERBcXxHpZ",
    },
    {
      title: "Instagram",
      icon: CiInstagram,
      size: 30,
      href: "https://www.instagram.com/eazy360?igsh=aWoxamFqZTIwMnN0&utm_source=qr",
    },
    {
      title: "Face Book",
      icon: CiFacebook,
      size: 30,
      href: "https://www.facebook.com/share/1DShFGdeh6/?mibextid=wwXIfr",
    },
  ];

  return (
    <div className="bg-primary/10 border-border/50 flex w-full items-center justify-between gap-4 border-b pr-3">
      <div className="flex items-center gap-4">
        <SidebarTrigger
          variant="outline"
          className={cn(
            "border-sidebar-border/70 my-2 ml-2 size-9 transition-all duration-200",
            "hover:border-sidebar-primary/50 hover:bg-sidebar-accent/10 hover:shadow-sidebar-primary/10 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]",
            "focus-visible:border-sidebar-primary focus-visible:ring-sidebar-primary/20",
          )}
          aria-controls="main-sidebar"
        />

        <div className="text-2xl font-medium capitalize">{route}</div>
      </div>

      <div className="flex items-center gap-3">
        {socialLinks.map(({ title, href, icon: Icon, size }) => (
          <Link
            key={title}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`Visit ÉGO on ${title}`}
            className="flex opacity-70 transition-opacity hover:opacity-100"
          >
            <Icon size={size} />
          </Link>
        ))}
      </div>
    </div>
  );
}
